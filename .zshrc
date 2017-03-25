# Load our dotfiles
for file in ~/.{extra,exports,aliases,functions}; do
  [ -r "$file" ] && source "$file"
done
unset file

# history
SAVEHIST=100000

######################################################################
### enable antigen and install some antigen bundles

# Enable Antigen
source ~/code/antigen/antigen.zsh
antigen init ~/.antigenrc

DEFAULT_USER="sbyerly"

# Automatically list directory contents on `cd`.
auto-ls () {
  emulate -L zsh;
  # explicit sexy ls'ing as aliases arent honored in here.
  hash gls >/dev/null 2>&1 && CLICOLOR_FORCE=1 gls -aFh --color --group-directories-first || ls
}
chpwd_functions=( auto-ls $chpwd_functions )
