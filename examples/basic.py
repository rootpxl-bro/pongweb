"""Minimal example for PongWeb."""

from pongweb import pongweb


def main():
 runner = pongweb({"name": "PongWeb", "dry_run": False})
 result = runner.execute()
 print(result)


if __name__ == "__main__":
 main()