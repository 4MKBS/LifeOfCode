#!/bin/bash

echo "=== Question 1: File & Directory Management ==="

# Step 1: Create /project and subdirectories
PROJECT_DIR="/project"
echo "Creating main directory $PROJECT_DIR ..."
mkdir -p $PROJECT_DIR/{docs,src,logs}

# Step 2: Create 3 sample files in each subdirectory
for DIR in docs src logs; do
    for i in {1..3}; do
        FILE="$PROJECT_DIR/$DIR/sample_$i.txt"
        echo "This is sample file $i in $DIR" > $FILE
    done
done
echo "Sample files created."

# Step 3: Compress logs folder
cd $PROJECT_DIR
tar -czf logs_backup.tar.gz logs
echo "Logs folder compressed into logs_backup.tar.gz"

# Step 4: Find all .txt files and list sorted by size
echo "Listing all .txt files sorted by size:"
find $PROJECT_DIR -type f -name "*.txt" -exec ls -lhS {} + | awk '{print $9, $5}'

echo "=== File & Directory Management Completed ==="