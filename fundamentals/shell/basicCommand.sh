#!/bin/bash

# Basic Shell Commands Tutorial
# warning: This script is for educational purposes only.
# Do not run it on a production system as it may modify or delete files.
# Always review and understand commands before executing them.

echo "=== File and Directory Operations ==="
ls          # List files and directories
ls -la      # List with detailed information including hidden files
pwd         # Print working directory
cd /path    # Change directory
mkdir dir   # Create directory
rmdir dir   # Remove empty directory
rm file     # Remove file
rm -rf dir  # Remove directory and contents recursively
cp file1 file2    # Copy file
mv file1 file2    # Move/rename file
find /path -name "*.txt"  # Find files

echo "=== File Content Operations ==="
cat file        # Display file content
less file       # View file with pagination
head file       # Show first 10 lines
tail file       # Show last 10 lines
grep "text" file    # Search for text in file
wc file         # Word, line, character count
sort file       # Sort file contents
uniq file       # Remove duplicate lines

echo "=== File Permissions ==="
chmod 755 file      # Change file permissions
chown user:group file   # Change file ownership
umask 022          # Set default permissions

echo "=== Process Management ==="
ps              # Show running processes
ps aux          # Detailed process list
top             # Real-time process monitor
kill PID        # Terminate process by ID
killall name    # Terminate processes by name
jobs            # Show active jobs
bg              # Put job in background
fg              # Bring job to foreground

echo "=== System Information ==="
whoami          # Current username
id              # User and group IDs
uname -a        # System information
df -h           # Disk usage
du -sh dir      # Directory size
free -h         # Memory usage
uptime          # System uptime

echo "=== Network Commands ==="
ping host       # Test connectivity
wget url        # Download file from web
curl url        # Transfer data from server

echo "=== Text Processing ==="
echo "text"     # Print text
printf "format" # Formatted output
sed 's/old/new/g' file  # Stream editor
awk '{print $1}' file   # Pattern processing

echo "=== Compression ==="
tar -czf archive.tar.gz dir/    # Create compressed archive
tar -xzf archive.tar.gz         # Extract archive
zip -r archive.zip dir/         # Create zip archive
unzip archive.zip               # Extract zip archive

echo "=== Environment ==="
env             # Show environment variables
export VAR=value    # Set environment variable
which command   # Show command location
history         # Command history
alias ll='ls -la'   # Create command alias

echo "=== Input/Output Redirection ==="
command > file      # Redirect output to file
command >> file     # Append output to file
command < file      # Input from file
command1 | command2 # Pipe output to another command

echo "=== Help Commands ==="
man command     # Manual page for command
command --help  # Show command help
info command    # Info documentation

# create multiple files
touch file1.txt file2.txt file3.txt
touch {a..e}.txt
touch file{1..5}.txt
touch file{A,B,C}.txt
touch file{X,Y,Z}{1,2,3}.txt
touch {1..3}name.txt

# echo multiple things
echo "Hello, World!" > hello.txt
echo -e "Line1\nLine2\nLine3" > lines.txt
echo "This is a sample text." >> sample.txt
echo "User: $USER" > user.txt
echo "Date: $(date)" > date.txt
echo "Path: $PATH" > path.txt
echo "Current Directory: $(pwd)" > cwd.txt
echo "Random Number: $RANDOM" > random.txt
echo "Hostname: $(hostname)" > hostname.txt
echo "Uptime: $(uptime)" > uptime.txt

echo {a..z} # Print letters a to z
echo {A..Z} # Print letters A to Z
echo {0..9} # Print numbers 0 to 9
echo {10..20} # Print numbers 10 to 20
echo {a..z}{0..9} # Print combinations of letters a to z with numbers 0 to 9
echo {A..Z}{10..20} # Print combinations
echo {10..100..2} # Print even numbers from 10 to 100

# stream and pipes

echo "this will get output to the file" 1> output.txt # redirect standard output to a file
echo "this will get appended to the file" >> output.txt # append standard output to a file
cat output.txt | grep "output" # pipe output of cat to grep

cat output.txt 1> final_output.txt # redirect standard output of cat to another file
cat final_output.txt # display the content

ls -lsah 1> ls_output.txt # redirect output of
ls -lsah >> ls_output.txt # append output of ls to the same file
cat ls_output.txt # display the content 
cat < ls_output.txt # input redirection from the file
ls -lsah 1> ls_output.txt 2> ls_error.txt # redirect standard output and error to separate files
ls -lsah 1>> ls_output.txt 2>> ls_error.txt # append standard
ls -lsah > ls_output.txt # redirect both standard output and error to the same file
ls -lsah 1> /dev/null # discard standard output

grep "output" < output.txt
grep "error-log.txt" < ls.txt 1> ls2.txt 2> /dev/null

# combining multiple commands with pipes
cat output.txt | grep "output" 

ps aux | grep "ps aux"

df -h | sort -k 5 -hr | head -n 5
free -h | awk 'NR==2{print $3 " used out of " $2}'

yes null | head -n 10 # generate 'null' 10 times

yes n | head -n 5 | xargs -I {} echo "You said: {}" # simulate user input 'n' 5 times

# user, group, permission commands
whoami
cat /etc/passwd | grep "$USER"
groups
id
ls -l perm_test.txt

sudo su
sudo chown root:root perm_test.txt
sudo chmod 600 perm_test.txt
sudo chmod 777 perm_test.txt
sudo chmod +x perm_test.txts

# environments
echo hello my name is $USER
cat /etc/environment
cat /etc/profile
cat ~/.bashrc
printenv PATH
export MY_VAR="HelloWorld"
echo $MY_VAR
unset MY_VAR
echo $MY_VAR
which bash

# open programs
xdg-open hello.txt
xdg-open ./
code .
gedit hello.txt &
nano hello.txt
vim hello.txt
google-chrome 

# locate programs
which ls
whereis bash
locate bash
which python3
where google-chrome
locate google-chrome

# kill processes
sleep 300 &
PID=$!
echo "Sleeping process PID: $PID"
kill $PID
ps aux | grep "sleep 300"
pkill sleep
pgrep sleep
kill -9 $PID

# 
date
date +%Y-%m-%d
date +%H:%M:%S
date +"%Y-%m-%d %H:%M:%S"
date -d "next Friday" +"%Y-%m-%d"
date -d "2024-12-25" +"%A, %B %d"
date -u +"%Y-%m-%d %H:%M:%S UTC"
date +"Week number: %V"
date +"Day of year: %j"
date +"Timezone: %Z %z"

uptime 
touch uptime_test.txt && date >> uptime_test.txt && uptime >> uptime_test.txt
cat uptime_test.txt
date && cat norealfile.txt && echo "I am not showing up"
false && echo "This will not be printed"
false || echo "This will be printed because the previous command failed"
false ; true ; echo "hey there"

echo I think $(whoami) is a very cool user # I think ubuntu is very cool
echo $(date +%x) – $(uptime) >> log.txt

# ssh commands
# ssh user@hostname
ssh -i /path/to/private_key user@hostname
scp file.txt user@hostname:/remote/path/
scp -r /local/directory/ user@hostname:/remote/directory/
ssh user@hostname 'ls -la /remote/directory/'
ssh -T user@hostname 
# keygen
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"


# sftp commands
sftp user@hostname
sftp> put localfile.txt
sftp> get remotefile.txt
sftp> ls
sftp> cd /remote/directory/
sftp> lcd /local/directory/
sftp> bye


# wget and curl
wget https://example.com/file.txt
wget -O custom_name.txt https://example.com/file.txt
wget -c https://example.com/largefile.zip
curl -O https://example.com/file.txt
curl -o custom_name.txt https://example.com/file.txt
curl -I https://example.com
curl -d "param1=value1&param2=value2" -X POST https://example.com/api
curl -H "Authorization: Bearer YOUR_TOKEN" https://example.com/protected
curl -b cookies.txt https://example.com/protected
