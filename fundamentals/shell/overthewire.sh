/*
 * Title: overthewire.sh
 * Description: Shell command examples for the OverTheWire Bandit wargame
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 03/11/2025 18:43:23
 */
# OverTheWire Bandit Wargame Solutions
# Shell Command Examples for Each Level

# Bandit Level 0 → Level 1
echo "=== Bandit Level 0 → Level 1 ==="
# Connect to Bandit Level 0
ssh bandit0@bandit.labs.overthewire.org -p 2220
# Password for bandit0: bandit0
# Retrieve the password for bandit1
cat readme

# Bandit Level 1 → Level 2
echo "=== Bandit Level 1 → Level 2 ==="
# Connect to Bandit Level 1
ssh bandit1@bandit.labs.overthewire.org -p 2220
# Password for bandit1 (from previous level)
# Retrieve the password for bandit2
cat ./-

# Bandit Level 2 → Level 3
echo "=== Bandit Level 2 → Level 3 ==="
# Connect to Bandit Level 2
ssh bandit2@bandit.labs.overthewire.org -p 2220
# Password for bandit2 (from previous level)
# Retrieve the password for bandit3
cat ./--spaces\ in\ this\ filename--


# Bandit Level 3 → Level 4
echo "=== Bandit Level 3 → Level 4 ==="
# Connect to Bandit Level 3
ssh bandit3@bandit.labs.overthewire.org -p 2220
# Password for bandit3 (from previous level)
# Retrieve the password for bandit4
cat ./...Hiding-From-You


# Bandit Level 4 → Level 5
echo "=== Bandit Level 4 → Level 5 ==="
# Connect to Bandit Level 4
ssh bandit4@bandit.labs.overthewire.org -p 2220
# Password for bandit4 (from previous level)
# Retrieve the password for bandit5
file ./*
file ./*-file*
cat ./-file07


# Bandit Level 5 → Level 6
echo "=== Bandit Level 5 → Level 6 ==="
# Connect to Bandit Level 5
ssh bandit5@bandit.labs.overthewire.org -p 2220
# Password for bandit5 (from previous level)
# Retrieve the password for bandit6
 find ./* -size 1033c
 cat ./maybehere07/.file2
 


# Bandit Level 6 → Level 7
echo "=== Bandit Level 6 → Level 7 ==="
# Connect to Bandit Level 6
ssh bandit6@bandit.labs.overthewire.org -p 2220
# Password for bandit6 (from previous level)
# Retrieve the password for bandit7
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
cat /var/lib/dpkg/info/bandit7.password


# Bandit Level 7 → Level 8
echo "=== Bandit Level 7 → Level 8 ==="
# Connect to Bandit Level 7
ssh bandit7@bandit.labs.overthewire.org -p 2220
# Password for bandit7 (from previous level)
# Retrieve the password for bandit8
 cat data.txt | grep "millionth"


# Bandit Level 8 → Level 9
echo "=== Bandit Level 8 → Level 9 ==="
# Connect to Bandit Level 8
ssh bandit8@bandit.labs.overthewire.org -p 2220
# Password for bandit8 (from previous level)
# Retrieve the password for bandit9
sort data.txt | uniq -u


# Bandit Level 9 → Level 10
echo "=== Bandit Level 9 → Level 10 ==="
# Connect to Bandit Level 9
ssh bandit9@bandit.labs.overthewire.org -p 2220
# Password for bandit9 (from previous level)
# Retrieve the password for bandit10
strings data.txt
strings data.txt | grep "=="
strings data.txt | grep ==




