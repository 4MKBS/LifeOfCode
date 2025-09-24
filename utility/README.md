# Utility Tools

This directory contains utility tools, scripts, and helper functions that support the repository's functionality.

## Purpose

The utilities section serves as:

1. A collection of reusable helper scripts
2. Tools for automating common tasks
3. Setup scripts for development environments
4. Support functions used across different sections of the repository

## Structure

```
utils/
  ├── runners/          # Scripts to run code in different languages
  ├── formatters/       # Code formatting tools
  ├── generators/       # Template/boilerplate generators
  ├── setup/            # Environment setup scripts
  └── scripts/          # Miscellaneous helper scripts
```

## Available Utilities

### Runners

Scripts for easily executing code in different languages:

- Python runner
- C/C++ compile and run
- Java execution helper
- JavaScript runner

### Formatters

Tools to ensure consistent code style:

- Code formatters by language
- Comment header generators
- Whitespace normalizers

### Generators

Templates and boilerplate code:

- Problem solution templates
- Test case generators
- Competitive programming snippets

### Setup

Environment configuration helpers:

- Development environment setup
- Dependency installation scripts
- Path configuration helpers

### Scripts

Miscellaneous helper scripts:

- File organization tools
- Batch processing scripts
- Repository maintenance tools

## Usage Examples

```bash
# Example: Run a Python file with timing information
./utils/runners/run_python.sh path/to/file.py

# Example: Generate a C++ solution template
./utils/generators/cpp_template.sh problem_name

# Example: Format all code in a directory
./utils/formatters/format_all.sh path/to/directory
```

## Adding New Utilities

When adding new utility tools:

1. Place in appropriate subdirectory
2. Include clear documentation and usage examples
3. Make sure scripts have proper permissions (`chmod +x`)
4. Add dependencies list if applicable
5. Test across different environments if possible

## Configuration

Some utilities may use configuration files located in:

```
utils/config/
```

Modify these files to customize behavior of the utilities.

## Common Tasks

Here are some common repository tasks and the utilities that help with them:

- **Starting a new solution**: Use template generators
- **Testing solutions**: Use the test runners
- **Preparing for contests**: Use environment setup scripts
- **Formatting code**: Use the code formatters
- **Batch processing**: Use the bulk operation scripts
