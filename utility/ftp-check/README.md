# URL Status Checker

This utility checks the status of URLs listed in a file and reports whether they are live or down.

## Features

- Checks multiple URLs in parallel (20 at a time by default)
- Times out after 3 seconds for non-responsive URLs
- Reports HTTP status codes for down URLs
- Saves results to a status report file

## Usage

1. Add your URLs to `ftplinks.txt`, one URL per line
2. Run the script:

```bash
chmod +x check_urls.sh
./check_urls.sh
```

3. View results in the terminal and in `status_report.txt`

## Configuration

You can modify the following variables in the script:

- `URL_FILE`: Path to the file containing URLs to check (default: `ftplinks.txt`)
- `OUTPUT_FILE`: Path to save the status report (default: `status_report.txt`)
- `-P 20`: Number of parallel processes (modify this value to change concurrency)
- `--max-time 3`: Timeout in seconds (modify this value to change the timeout period)

## Requirements

- Bash shell
- curl
- xargs

## Example Output

```
[LIVE] https://example.com
[LIVE] https://github.com
[DOWN] https://nonexistentwebsite123456789.com (Timeout or no response within 3s)
[LIVE] https://wikipedia.org
```
