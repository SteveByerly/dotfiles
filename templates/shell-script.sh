#!/bin/bash

#------------
# Program
#------------

# Goals

# Todo

# Notes

#------------
# Settings
#------------

#------------
# Variables
#------------

PROGRAM_NAME="shell-script.sh"
VERSION="0.0.0-prerelease"

#------------
# Arguments
#------------

# Action flags
action_help=false
action_version=false

# Options flags
option_verbose=false
option_quiet=false

# Arguments collection loop
positional_args=()
argument_count=0
while [[ $# -gt 0 ]]; do
	argument="$1"
	case $argument in
		help|-h|--help)
			action_help=true
			shift
		;;
		version|--version)
			action_version=true
			shift
		;;
		-q|--quiet)
			option_quiet=true
			shift
		;;
		-v|--verbose)
			option_verbose=true
			shift
		;;
		*)
			positional_args+=("$1")
			shift
		;;
	esac
	((argument_count++))
done
set -- "${positional_args[@]}"

# Default action
if [ "$argument_count" = 0 ]; then
	action_help=true
fi

# Verbose takes precedence over quiet
if [ "$option_verbose" = "true" ]; then
	option_quiet=false
fi

#------------
# Functions
#------------

echo_quiet()
{
	if [ "$option_quiet" != true ]; then
		echo "$1"
	fi
}

echo_verbose()
{
	if [ "$option_verbose" = true ]; then
		echo "$1"
	fi
}

#------------
# Script
#------------

# Print usage/help information
if [ "$action_help" = "true" ]; then
	echo -e "\e[1mUSAGE\e[0m:"
	echo -e "    $PROGRAM_NAME (help | -h | --help)"
	echo -e "    $PROGRAM_NAME (version | --version)"
	echo -e "\n\e[1mOPTIONS\e[0m:"
	echo -e "    -q --quiet       Quiet ouput"
	echo -e "    -v --verbose     Verbose output"
fi

# Print version information
if [ "$action_version" = "true" ]; then
	echo -e "\e[1mVersion\e[0m: $VERSION"
fi

# Exit with success
exit 0
