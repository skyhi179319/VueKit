// Elements
// basic elements
var header = new Vue({
    el: '#header',
    components:{
        'kit-header': {
            template: `
            <div>
                <link rel="stylesheet" href="/kit.css">
                <script type="module">
                    import * as main from './module.js';
                    Vue.config.devtools = main.vue.devtools;
                    Vue.config.productionTip = main.vue.productionTip;
                    main.vue.returnVue();
                </script>
            </div>`
        }
    }
})
var footer = new Vue({
    el: '#footer',
    components:{
        'kit-footer': {
            props: ['name', 'year'],
            template: `
            <div>
                <footer class="kit-footer">
                  <p>© {{year}} Copyright {{name}}</p>
                </footer>
            </div>`
        }
    }
})
// form elements
var textarea = new Vue({
    el: '#textarea',
    components:{
        'kit-textarea': {
            props: ['name','col','rows','required','placeholder'],
            template: `
            <div>
                <div v-if="required === 'true'">
                    <textarea v-bind:name="name" v-bind:col="col" v-bind:rows="rows"
                    v-bind:placeholder="placeholder" required class="kit-textarea"></textarea>
                </div>
                <div v-else>
                    <textarea v-bind:name="name" v-bind:col="col" v-bind:rows="rows"
                    v-bind:placeholder="placeholder" class="kit-textarea"></textarea>
                </div>
            </div>`
        }
    }
})
var input = new Vue({
    el: '#input',
    components:{
        'kit-textarea': {
            props: ['type','name','width', 'id'],
            template: `
            <div>
                <div v-if="required === 'true'">
                    <div v-if="id !== ''">
                        <input v-bind:id="id" v-bind:type="type" v-bind:name="name" v-bind:width="width" required class="kit-input">
                    </div>
                    <div v-else>
                        <input v-bind:type="type" v-bind:name="name" v-bind:width="width" required class="kit-input">
                    </div>
                </div>
                <div v-else>
                    <div v-if="id !== ''">
                        <input v-bind:id="id" v-bind:type="type" v-bind:name="name" v-bind:width="width"class="kit-input">
                    </div>
                    <div v-else>
                        <input v-bind:type="type" v-bind:name="name" v-bind:width="width" class="kit-input">
                    </div>
                </div>
            </div>`
        }
    }
})
// audio and video
var audio = new Vue({
    el: '#audio',
    components:{
        'kit-audio': {
            props: ['file', 'autoplay'],
            template: `
            <div>
                <div v-if="autoplay === 'true'">
                    <audio controls autoplay class="kit-audio">
                        <source v-bind:src="file" type="audio/mpeg">
                    </audio>
                </div>
                <div v-else>
                    <audio controls class="kit-audio">
                        <source v-bind:src="file" type="audio/mpeg">
                    </audio>
                </div>   
            </div>`
        }
    }
})
var video = new Vue({
    el: '#video',
    components:{
        'kit-video': {
            props: ['file', 'autoplay'],
            template: `
            <div>
                <div v-if="autoplay === 'true'">
                    <video controls autoplay class="kit-video">
                        <source v-bind:src="file" type="video/mp4">
                    </video>
                </div>
                <div v-else>
                    <video controls class="kit-video">
                        <source v-bind:src="file" type="video/mp4">
                    </video>
                </div>   
            </div>`
        }
    }
})
var youtubeVideo = new Vue({
    el: '#youtube',
    components:{
        'kit-youtube': {
            props: ['link'],
            template: `
            <div>
                <iframe v-if="link !== ''" class="kit-youtube" v-bind:src="link"></iframe> 
            </div>`
        }
    }
})
// other elements
var alert = new Vue({
    el: '#alert',
    components:{
        'kit-alert': {
            props: ['type','text'],
            template: `
            <div>
                <div id="deleteAlert" v-if="type === 'primary'" class="kit-alert kit-alert-primary">
                    <p>{{text}}</p>
                    <button class="kit-alert-button" id="alertButton">
                        <span>&times;</span>
                    </button>
                </div>
                <div id="deleteAlert" v-else-if="type === 'success'" class="kit-alert kit-alert-success">
                    <p>{{text}}</p>
                    <button class="kit-alert-button" id="alertButton">
                        <span>&times;</span>
                    </button>
                </div>
                <div id="deleteAlert" v-else-if="type === 'warning'" class="kit-alert kit-alert-warning">
                    <p>{{text}}</p>
                    <button class="kit-alert-button" id="alertButton">
                        <span>&times;</span>
                    </button>
                </div>
                <div id="deleteAlert" v-else-if="type === 'failure'" class="kit-alert kit-alert-failure">
                    <p>{{text}}</p>
                    <button class="kit-alert-button" id="alertButton">
                        <span>&times;</span>
                    </button>
                </div>
                <div v-else>
                
                </div>
                <script type="module">
                    import * as main from './module.js';
                    main.comp.addOnClick("alertButton");
                </script>
            </div>`
        }
    }
})
var card = new Vue({
    el: '#card',
    components:{
        'kit-card': {
            props: ['type','url','alt','title','text'],
            template: `
            <div>
                <div class="kit-card" style="width: 15rem;">
                  <img v-if="type === 'img'" class="kit-card-img-top" v-bind:src="url" v-bind:alt="alt">
                  <iframe v-if="type === 'iframe'" v-bind:src="url" height="250" width="238"></iframe>
                  <div class="kit-card-body">
                    <div class="kit-card-body-content">
                        <h5 class="kit-card-title">{{title}}</h5>
                        <p class="kit-card-text">{{text}}</p>
                    </div>
                  </div>
                </div>
            </div>`
        }
    }
})