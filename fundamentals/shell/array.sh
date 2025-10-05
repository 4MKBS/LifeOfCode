    #!/bin/bash
    # Comprehensive guide to arrays in bash scripting

    # ==========================================
    # 1. Creating and Initializing Arrays
    # ==========================================
    echo "=== Creating Arrays ==="

    # Method 1: Declare an array explicitly
    declare -a my_array

    # Method 2: Direct assignment
    fruits=("Apple" "Banana" "Cherry" "Date")
    echo "Fruits array: ${fruits[@]}"

    # Method 3: Individual element assignment
    colors[0]="Red"
    colors[1]="Green"
    colors[2]="Blue"
    echo "Colors array: ${colors[@]}"

    # ==========================================
    # 2. Accessing Array Elements
    # ==========================================
    echo -e "\n=== Accessing Array Elements ==="

    # Access single element
    echo "First fruit: ${fruits[0]}"

    # Access all elements
    echo "All fruits: ${fruits[@]}"

    # Get array length
    echo "Number of fruits: ${#fruits[@]}"

    # Get indexes
    echo "Fruit indexes: ${!fruits[@]}"

    # ==========================================
    # 3. Array Operations
    # ==========================================
    echo -e "\n=== Array Operations ==="

    # Adding elements
    fruits+=("Elderberry")
    fruits+=("Fig" "Grape")
    echo "After adding: ${fruits[@]}"

    # Replacing elements
    fruits[1]="Blueberry"
    echo "After replacing: ${fruits[@]}"

    # Deleting elements
    unset fruits[2]
    echo "After deleting index 2: ${fruits[@]}"

    # Slicing arrays (from index 1, take 2 elements)
    echo "Sliced array: ${fruits[@]:1:2}"

    # ==========================================
    # 4. Iterating Through Arrays
    # ==========================================
    echo -e "\n=== Iterating Through Arrays ==="

    echo "Method 1: Using for loop with elements"
    for fruit in "${fruits[@]}"; do
        echo "Fruit: $fruit"
    done

    echo -e "\nMethod 2: Using for loop with indexes"
    for i in "${!fruits[@]}"; do
        echo "fruits[$i] = ${fruits[$i]}"
    done

    echo -e "\nMethod 3: Using C-style for loop"
    for ((i=0; i<${#fruits[@]}; i++)); do
        echo "Index $i: ${fruits[$i]}"
    done

    # ==========================================
    # 5. Associative Arrays (Bash 4.0+)
    # ==========================================
    echo -e "\n=== Associative Arrays ==="

    # Declare associative array
    declare -A country_capitals

    # Assign key-value pairs
    country_capitals["USA"]="Washington"
    country_capitals["UK"]="London"
    country_capitals["France"]="Paris"
    country_capitals["Japan"]="Tokyo"

    # Print all key-value pairs
    echo "All country capitals:"
    for country in "${!country_capitals[@]}"; do
        echo "$country: ${country_capitals[$country]}"
    done

    # ==========================================
    # 6. Useful Array Operations
    # ==========================================
    echo -e "\n=== Useful Array Operations ==="

    # Joining array elements
    joined_string=$(IFS=", "; echo "${fruits[*]}")
    echo "Joined fruits: $joined_string"

    # Creating array from string
    string="one,two,three,four"
    IFS=',' read -ra string_array <<< "$string"
    echo "Array from string: ${string_array[@]}"

    # Copying arrays
    new_array=("${fruits[@]}")
    echo "Copied array: ${new_array[@]}"

    # Array contains element check
    search="Blueberry"
    if [[ " ${fruits[@]} " =~ " ${search} " ]]; then
        echo "$search exists in the fruits array"
    else
        echo "$search does not exist in the fruits array"
    fi

    # Sorting array
    sorted_fruits=($(printf '%s\n' "${fruits[@]}" | sort))
    echo "Sorted fruits: ${sorted_fruits[@]}"

    echo -e "\nEnd of array examples"