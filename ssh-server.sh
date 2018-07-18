#!/usr/bin/expect -f
# Inteded to be used as an alias to login to a server and enter password from alias, example
# alias ssh-myserver='~/workspace/du-dev/scripts/./ssh-server.sh my-server my-passowrd' 
set server [lindex $argv 0];
set password [lindex $argv 1];
spawn ssh $server
expect "password:"
send "$password\r"
interact

#example alias entry in .bash_profile
#alias snpub='~/workspace/modules/du-dev/scripts/./ssh-server.sh pals-nodejs-bd5 Happy14#'