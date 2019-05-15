#!/bin/bash

brew update && brew upgrade

# -----------------------------------------------------------
# Cask Utils
# -----------------------------------------------------------
brew tap caskroom/versions
brew tap caskroom/fonts


# -----------------------------------------------------------
# OS Utils
# -----------------------------------------------------------
# Window Management
brew cask install spectacle
# Device Management
brew cask install bettertouchtool


# -----------------------------------------------------------
# Storage Management
# -----------------------------------------------------------
brew cask install disk-inventory-x
brew cask install dropbox
brew cask install google-backup-and-sync


# -----------------------------------------------------------
# Security Management
# -----------------------------------------------------------
# Password Manager
brew cask install 1password
# Key Manager
brew cask install gpg-suite


# -----------------------------------------------------------
# IDEs
# -----------------------------------------------------------
# Multi-Database management tools
brew cask install dbeaver-community
brew cask install datagrip
# MySQL management tool
brew cask install sequel-pro

# Code Editors
brew cask install sublime-text
brew cask install visual-studio-code

# REST Clients
brew cask install insomnia
brew cask install postman


# -----------------------------------------------------------
# Browsers
# -----------------------------------------------------------
brew cask install brave
brew cask install google-chrome
brew cask install firefox

brew cask install firefoxnightly
brew cask install google-chrome-canary


# -----------------------------------------------------------
# Dev Tools
# -----------------------------------------------------------
brew cask install iterm2
# Cross-platform, fast, feature full, GPU based terminal emulator
brew cask install kitty
brew cask install docker
brew cask install virtualbox


# -----------------------------------------------------------
# Languages/Frameworks
# -----------------------------------------------------------
brew cask install dotnet
brew cask install dotnet-sdk


# -----------------------------------------------------------
# Media
# -----------------------------------------------------------
brew cask install miro-video-converter
brew cask install spotify
brew cask install vlc


# -----------------------------------------------------------
# Image Editing
# -----------------------------------------------------------
brew cask install gimp
brew cask install imagealpha
brew cask install imageoptim
brew cask install krita


# -----------------------------------------------------------
# Display Capture
# -----------------------------------------------------------
# An instant way to take a screenshot/GIF and bookmark anything you see
brew cask install gyazo
# Simple animated screen captures
brew cask install licecap
# Video editing and screen recording
brew cask install screenflow


# -----------------------------------------------------------
# Misc
# -----------------------------------------------------------
# Android File Transfer
android-file-transfer

# USB tethering
brew cask install horndis


# -----------------------------------------------------------
# Cleanup
# -----------------------------------------------------------
brew cleanup -s
brew cask cleanup
