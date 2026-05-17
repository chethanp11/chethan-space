#!/usr/bin/env bash
set -euo pipefail

# Start the Next.js application on a predictable host/port.
# If the selected port is already occupied, stop only the listeners on that port
# before starting the app.
#
# Usage:
#   ./scripts/start-app.sh              # dev mode on 127.0.0.1:3000
#   PORT=3001 ./scripts/start-app.sh
#   HOST=0.0.0.0 MODE=prod ./scripts/start-app.sh

HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-3000}"
MODE="${MODE:-dev}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if ! command -v lsof >/dev/null 2>&1; then
  echo "lsof is required to check whether port ${PORT} is blocked." >&2
  exit 1
fi

if [[ ! "${PORT}" =~ ^[0-9]+$ ]]; then
  echo "PORT must be numeric. Received: ${PORT}" >&2
  exit 1
fi

PIDS="$(lsof -tiTCP:"${PORT}" -sTCP:LISTEN 2>/dev/null || true)"

if [[ -n "${PIDS}" ]]; then
  echo "Port ${PORT} is already in use. Stopping listener(s): ${PIDS}"
  kill ${PIDS} 2>/dev/null || true

  for _ in {1..20}; do
    sleep 0.2
    if [[ -z "$(lsof -tiTCP:"${PORT}" -sTCP:LISTEN 2>/dev/null || true)" ]]; then
      break
    fi
  done

  REMAINING="$(lsof -tiTCP:"${PORT}" -sTCP:LISTEN 2>/dev/null || true)"
  if [[ -n "${REMAINING}" ]]; then
    echo "Listener(s) still active on ${PORT}. Force stopping: ${REMAINING}"
    kill -9 ${REMAINING} 2>/dev/null || true
  fi
fi

cd "${ROOT_DIR}"

case "${MODE}" in
  dev)
    echo "Starting Next.js dev server at http://${HOST}:${PORT}"
    exec npx next dev -H "${HOST}" -p "${PORT}"
    ;;
  prod|start)
    echo "Starting Next.js production server at http://${HOST}:${PORT}"
    exec npx next start -H "${HOST}" -p "${PORT}"
    ;;
  *)
    echo "Unsupported MODE: ${MODE}. Use 'dev' or 'prod'." >&2
    exit 1
    ;;
esac
