import React from 'react'

const Home = () => {
  return (
    <section id="showcase">
      <div class="container">
        <div class="grid">
          <div class="grid-item">
            <a href="bistrot.html">
              <img src="images/boucher-home.jpg"  class="rsp-image" />
              <div class="grid-item-overlay">
                <div class="grid-item-text">
                  <h2>bistrot</h2>
                </div>
              </div>
            </a>
          </div>
          <div class="grid-item">
            <a href="quixote.html">
              <img src="images/quixote-home.jpg"  class="rsp-image" />
              <div class="grid-item-overlay">
                <div class="grid-item-text">
                  <h2>Quixote</h2>
                </div>
              </div>
            </a>  
          </div>
          <div class="grid-item">
            <a href="myco.html">
              <img src="images/myco-1-home.jpg"  class="rsp-image" />
              <div class="grid-item-overlay">
                <div class="grid-item-text">
                  <h2>Myco</h2>
                </div>
              </div>
            </a>          
          </div>
          <div class="grid-item">
            <a href="eclectica.html">
              <img src="images/walrus-home.jpg"  class="rsp-image" />
              <div class="grid-item-overlay">
                <div class="grid-item-text">
                  <h2>Eclectica</h2>
                </div>
              </div>
            </a>         
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
