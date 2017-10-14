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
brew cask install spectacle
brew cask install 1password
brew cask install flux

# -----------------------------------------------------------
# Storage Management
# -----------------------------------------------------------
brew cask install dropbox
brew cask install google-backup-and-sync
brew cask install disk-inventory-x

# -----------------------------------------------------------
# IDEs
# -----------------------------------------------------------
brew cask install sublime-text
brew cask install visual-studio-code
brew cask install sequel-pro

# -----------------------------------------------------------
# Browsers
# -----------------------------------------------------------
brew cask install google-chrome
brew cask install firefox
brew cask install brave

brew cask install google-chrome-canary
brew cask install firefoxnightly
brew cask install chromium

# -----------------------------------------------------------
# Dev Tools
# -----------------------------------------------------------
brew cask install iterm2
brew cask install dotnet
brew cask install dotnet-sdk
brew cask install virtualbox
brew cask install docker
brew cask install imagealpha
brew cask install imageoptim

# -----------------------------------------------------------
# Media
# -----------------------------------------------------------
brew cask install vlc
brew cask install spotify
brew cask install miro-video-converter

# -----------------------------------------------------------
# Display Capture
# -----------------------------------------------------------
# Video editing and screen recording 
brew cask install screenflow
# An instant way to take a screenshot/GIF and bookmark
# anything you see
brew cask install gyazo
# Simple animated screen captures
brew cask install licecap

# -----------------------------------------------------------
# Misc
# -----------------------------------------------------------
brew cask install gpgtools
# USB tethering
brew cask install horndis

# -----------------------------------------------------------
# Cleanup
# -----------------------------------------------------------
brew cleanup
brew cask cleanup
