import "./style.css"
import Experience from "./experience/Experience"

const experience = new Experience({
    targetElement: document.querySelector<HTMLDivElement>(".experience"),
})

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="projects">

    <div class="header">
      <div class="title">
        <h1>Current Projects</h1>
        <p>My present as a programmer</p>
      </div>
      <div class="close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

        <a href="https://github.com/GlintonLiao/king-of-bots" class="card" target="_blank">
          <img src="/imgs/Cover-KOB.jpg" class="img" alt="" />
          <div class="description">
            <h3>King of Bots</h3>
            <p>Ai battle platform supporting PvE and PvP</p>
          </div>
        </a>

        <a href="https://github.com/GlintonLiao/Key-Board" class="card" target="_blank">
          <img src="/imgs/Cover-Keyboard.jpg" class="img" alt="" />
          <div class="description">
            <h3>[Key: Board]</h3>
            <p>An iOS keyboard for code editing</p>
          </div>
        </a>

        <a href="https://github.com/vueuse/vue-chemistry" class="card" target="_blank">
          <img src="/imgs/vue-chemistry.jpg" class="img" alt="" />
          <div class="description">
            <h3>Vue Chemistry</h3>
            <p>Reactified JavaScript functions for Vue</p>
          </div>
        </a>
        
        <a href="https://github.com/GlintonLiao/threejs-template-typescript" class="card" target="_blank">
          <img src="/imgs/cover-vithree.jpg" class="img" alt="" />
          <div class="description">
            <h3>Three.js Starting Template</h3>
            <p>Three.js starting template based on TS and Vite</p>
          </div>
        </a>
        
        <a href="https://github.com/GlintonLiao/questopia" class="card" target="_blank">
          <img src="/imgs/Cover-Questopia.jpg" class="img" alt="" />
          <div class="description">
            <h3>Questopia</h3>
            <p>3D room · Personal website · Online portfolio</p>
          </div>
        </a>

        <a href="https://www.npmjs.com/package/pkg-desc" class="card" target="_blank">
          <img src="/imgs/Cover-Pkg.jpg" class="img" alt="" />
          <div class="description">
            <h3>Pkg-Desc</h3>
            <p>List details of all dependencies packages</p>
          </div>
        </a>

        <a href="https://reactive-numbers-converter.netlify.app" class="card" target="_blank">
          <img src="/imgs/Cover-Reactive.jpg" class="img" alt="" />
          <div class="description">
            <h3>Reactive Numbers Converter</h3>
            <p>All in one with fully reactivity</p>
          </div>
        </a>

        <a href="https://www.titongpaolu.run/" class="card" target="_blank">
          <img src="/imgs/Cover-Titong.jpg" class="img" alt="" />
          <div class="description">
            <h3>Archibucket</h3>
            <p>An informative website for the architectural industry</p>
          </div>
        </a>

        <a href="https://chrome.google.com/webstore/detail/layout-visualizer/damlicfebbfedlipdokpehkmkpbhgpfi" class="card" target="_blank">
          <img src="/imgs/Cover-Layout.jpg" class="img" alt="" />
          <div class="description">
            <h3>Layout Visualizer</h3>
            <p>The console.log() for the CSS</p>
          </div>
        </a>

        <a href="https://www.hyperui.dev/components/application-ui/toggles" class="card" target="_blank">
          <img src="/imgs/Cover-hyper.jpg" class="img" alt="" />
          <div class="description">
            <h3>Hyper UI</h3>
            <p>Free Open Source Tailwind CSS Components</p>
          </div>
        </a>
        
      </div>
    </div>

    <footer>
      <div class="contact">
        <a
          href="../img/Projects/QR Code.jpg"
          target="_blank"
          class="wechat-button"
        ></a>
        <a
          href="https://www.linkedin.com/in/glintonliao"
          target="_blank"
          class="linkedin-button"
        ></a>
        <a
          href="https://github.com/byte-dev-hubs"
          target="_blank"
          class="github-button"
        ></a>
      </div>

      <span> © Brian Kleinberg's Portfolio </span>
    </footer>
  </div>

  <div class="prev-projects">

    <div class="header">
      <div class="title">
        <h1>Previous Projects</h1>
        <p>My past as an architect</p>
      </div>
      <div class="prev-close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

        <a href="https://github.com/byte-dev-hubs/hila-java" class="card" target="_blank">
          <img src="/imgs/Cover.png" class="img" alt="" />
          <div class="description">
            <h3>Hilla</h3>
            <p>The Modern Web framework for Java</p>
          </div>
        </a>

        <a href="https://github.com/byte-dev-hubs/l-ecommerce" class="card" target="_blank">
          <img
            src="/imgs/Cover-Archimason.jpg"
            class="img"
            alt=""
          />
          <div class="description">
            <h3>E-commerce</h3>
            <p>Laravel E-commerce Website</p>
          </div>
        </a>

        <a href="https://github.com/byte-dev-hubs/mart-shopify-laravel" class="card" target="_blank">
          <img
            src="https://user-images.githubusercontent.com/47269591/98431883-87064e80-20e1-11eb-9f84-7b769185e8ee.gif"
            class="img"
            alt=""
          />
          <div class="description">
            <h3>Mart Laravel</h3>
            <p>Laravel Shopify System</p>
          </div>
        </a>

        <a href="https://github.com/byte-dev-hubs/go-torrent" class="card" target="_blank">
          <img src="https://github.com/byte-dev-hubs/go-torrent/raw/master/documentation/images/frontend.png" class="img" alt="" />
          <div class="description">
            <h3>Go Torrent</h3>
            <p>goTorrent is a torrenting server built with Go (Golang) with websocket API that comes with a React web frontend.</p>
          </div>
        </a>

        <a href="https://github.com/byte-dev-hubs/pms-laravel" class="card" target="_blank">
          <img src="/imgs/Cover-Box.jpg" class="img" alt="" />
          <div class="description">
            <h3>PMS</h3>
            <p>Laravel based Project Management System</p>
          </div>
        </a>

        <a href="https://github.com/byte-dev-hubs/GPT4-Sim-Tapiy" class="card" target="_blank">
          <img src="https://github.com/byte-dev-hubs/GPT4-Sim-Tapiy/raw/main/media/gpt4-thumb.png" class="img" alt="" />
          <div class="description">
            <h3>Taipy GPT-4 Chat Demo</h3>
            <p>GPT-4 Chat Web App created in only 80 lines of Python using Taipy</p>
          </div>
        </a>
    
      </div>
    </div>

    <footer>
      <div class="contact">
        <a
          href="/imgs/QR Code.jpg"
          target="_blank"
          class="wechat-button"
        ></a>
        <a
          href="https://www.linkedin.com/in/glintonliao"
          target="_blank"
          class="linkedin-button"
        ></a>
        <a
          href="https://github.com/byte-dev-hubs"
          target="_blank"
          class="github-button"
        ></a>
      </div>

      <span> © Brian Kleinberg's Portfolio </span>
    </footer>

  </div>
`

export { experience }
