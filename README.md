## :wolf: Nymeria
![](https://img.shields.io/npm/v/@gnarwall19/nymeria.svg?style=popout)
#### A small but functional JavaScript testing framework

###### Built with lots of help from Alcides Queiroz's guide on Medium

**This framework was put together in order to help me better understand how testing wokrs in JavaScript. I Do NOT recommend ANYBODY use Nymeria for testing prodcution code!!**

Now since that's out of the way, *how do you use Nymeria to test your code??*
~Well as of now it's a long and complicated process, BUT...~ Like this:

`npm i @gnarwall19/nymeria --save-dev`

1. Create your own `tests` folder in your applications source folder
2. In your `tests` folder, create an `index.js` file that:
    - has a variable called nymeria that requires '@gnarwall19/nymeria'
    - Requires your `whatever.test.js` files
    - Finishes with `nymeria.end()` to run the exit code
3. Write all the tests you want in your .test.js files just make sure you require them in `index.js`!
4. Run `node tests` from your projects source in the terminal/command prompt

## CONSIDER THIS: ##

- Make sure your tests folder has an `index.js` file that:
    1. Requires nymeria as a const
    2. Requires your `whatever.test.js` files
    3. Finishes with `nymeria.end()` to run the exit code
- `Whatever.test.js` files need to require `{ guarantee, check, xcheck, group }` as a const from nymeria
- Check out the playground folder for some examples!

**Again, credit for this project must be given to Alcides Queiroz for putting together an awesome tutorial! read the medium article [here](https://medium.freecodecamp.org/learnbydiy-how-to-create-a-javascript-unit-testing-framework-from-scratch-c94e0ba1c57a)**
