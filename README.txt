SOFIA PAZARRI DEMO CLONE

.to implement image animations on scroll, use Animate on Scroll library https://github.com/michalsnik/aos/tree/v2

.from terminal opened in root of project folder, run   >npm init to generate package.json, then run   >npm install aos --save 
.or you can just download the the zip file from github and get the aos.css and aos.js files from the dist folder and manually include them in your project directory
.include the link   <link rel="stylesheet" href="node_modules/aos/dist/aos.css" />    OR   <link rel="stylesheet" href="css/aos.css" />
.include the script <script src="node_modules/aos/dist/aos.js"></script>     OR    <script src="js/aos.js"></script>.  make sure to place this tag before the one that calls your main.js file if you plan on calling the AOS.init() function from your main.js.  otherwise you will get an AOS undefined error.

.initialize the AOS object in your html or your main.js file

                             <script>
                              AOS.init();         OR        AOS.init();
                             </script>

.to change the animation settings on a particular element, you can pass the options in as data attributes on the specific element like so for example to change the duration

                       <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
   

.if you don't want to change setting for each element separately, you can change it globally.  To do this, pass options object to init() function, like so:

                                  <script>
                                    AOS.init({
                                      offset: 200,
                                      duration: 600,
                                      easing: 'ease-in-sine',
                                      delay: 100,
                                    });
                                  </script>
    

.if you want to disable AOS on certain device or under any statement you can set disable option. Like so:

                                  <script>
                                    AOS.init({
                                      disable: 'mobile'
                                    });
                                  </script>

.to tweak other options you can find the class name in the aos.css file and make manual adjustments in your stylesheet to override the definitions.  note, it is better to override in the stylesheet rather than make changes to the source code. for example to change the distance an element moves in a fade up animation, change the second parameter of the translate3d function to 50px from 100px

                            [data-aos=fade-up]{transform:translate3d(0,100px,0)}

                                                becomes

                            [data-aos=fade-up]{transform:translate3d(0,50px,0)}


.for more options, see docs on github




