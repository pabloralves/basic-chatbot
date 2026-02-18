#!/usr/bin/env bash
# Create code.zip with source only (no node_modules, venv, .env, etc.)
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
zip -r code.zip . \
  -x "*/node_modules/*" \
  -x "*/.venv/*" \
  -x "*/venv/*" \
  -x "*/.env" \
  -x "*/.env.*" \
  -x "*/__pycache__/*" \
  -x "*.pyc" \
  -x ".git/*" \
  -x "code.zip" \
  -x "*.swp" \
  -x ".DS_Store"
echo "Created code.zip in $ROOT"
