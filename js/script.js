const root = new Vue (
    {
        el: '#app',
        data: {
            currentIndex:0,

            autoplay: null,

            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                    
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                    
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                    
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                    
                }
            ]



        },
        methods:{

            changePictureToIndex: function(indexToBeChanged){
                this.currentIndex=indexToBeChanged;
            },
            Next: function(){
                
                if (this.currentIndex==this.slides.length-1){
                 this.currentIndex=0

                 
                } else {
                    this.currentIndex++;
                 
                }

               
            },

            Prev: function(){
            

                if (this.currentIndex==0){
                    this.currentIndex=this.slides.length-1   
                } else{
                    this.currentIndex--;

                   
                }
                
            },

            startAutoplay: function(){
                if (this.autoplay==null){
                    this.autoPlay = setInterval(() =>{
                    this.Next();
                    },3000);
                }    
            },

            stopAutoplay: function(){
               clearInterval(this.autoPlay);
               this.autoPlay = null;
            },    
            

        },

        create: function(){
            this.startAutoplay();
        }

    }
);

