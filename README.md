## :wolf: Nymeria
#### A small but functional JavaScript testing framework

###### Built with lots of help from Alcides Queiroz's guide on Medium

**This framework was put together in order to help me better understand how testing wokrs in JavaScript. I Do NOT recommend ANYBODY use Nymeria for testing prodcution code!!**

Now since that's out of the way, *how do you use Nymeria to test your code??*
Well as of now it's a long and complicated process, BUT... Like this:

1. Download / Clone this repo
2. Copy the `proj` folder and paste it into your applications source folder
3. Create your own `tests` folder in your applications source folder
4. Run `npm init -y` (still in your apps source)
5. Open the `package.json` file and remove `"main": "index.js"`
6. Add:
    ```
    "scripts": {
        "tests": "node tests"
    },
    ```
7. Navigate to `proj` folder and run `npm link`
8. Navigate back to app src folder and run `npm link nymeria`
9. Now you SHOULD be able to run your tests with the command `node tests`

## CONSIDER THIS: ##

- Make sure your tests folder has an `index.js` file that:
    1. Requires nymeria as a const
    2. Requires your `whatever.test.js` files
    3. Finishes with `nymeria.end()` to run the exit code
- `Whatever.test.js` files need to require `{ guarantee, check, xcheck, group }` as a const from nymeria
- Check out the playground folder for some examples!

**Again, credit for this project must be given to Alcides Queiroz for putting together an awesome tutorial! read the medium article [here](https://medium.freecodecamp.org/learnbydiy-how-to-create-a-javascript-unit-testing-framework-from-scratch-c94e0ba1c57a)**
