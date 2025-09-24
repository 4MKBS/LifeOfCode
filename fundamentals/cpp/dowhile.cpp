#include <bits/stdc++.h>
using namespace std;

int main()
{
    // Do-While Loop Example in C++
    // Initialize counter
    int count = 0;

    // Do-while loop executes at least once before checking condition
    do
    {
        count++;

        // Example of continue - skip processing when count is divisible by 3
        if (count % 3 == 0)
        {
            cout << "Skipping " << count << " (divisible by 3)" << endl;
            continue; // Skip rest of the loop body for this iteration
        }

        cout << "Processing: " << count << endl;

        // Example of break - exit loop when count reaches 10
        if (count >= 10)
        {
            cout << "Count reached 10. Breaking the loop!" << endl;
            break; // Exit the loop completely
        }

    } while (count < 20); // This condition is only checked if break is not executed

    cout << "Loop ended. Final count: " << count << endl;
    cout << endl;
    // game of do while break and continue
    cout << "Welcome to the game! " << endl;
    do
    {
        // Game logic here
        int choice;
        cout << "Enter your choice : ";
        cin >> choice;
        if (choice % 10 == 0)
        {
            cout << "You win!" << endl;
            cout << "Do you want to play again? (1 for Yes, 0 for No): ";
            int playAgain;
            cin >> playAgain;
            if (playAgain == 0)
            {
                cout << "Thanks for playing!" << endl;
                break; // Exit the loop if the user doesn't want to play again
            }
            cout << "Let's play again!" << endl;
            continue; // Continue to the next iteration if the user wants to play again
        }
        else if (choice % 10 == 5)
        {
            cout << "You got a special number!" << endl;
        }
        else
        {
            cout << "Oops! Try again!" << endl;
        }
    } while (true);
    return 0;
}