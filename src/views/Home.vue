<template>
  <div class="content-wrapper" id="home">
    <section id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-item-inner">
          <img class="d-block w-100" src="../assets/images/slider-img-3@2x.png" alt="First slide">
          </div>
          <div class="overlay"></div>
        </div>
        <div class="carousel-item">
          <div class="carousel-item-inner">
            <img class="d-block w-100" src="../assets/images/slider-img-2@2x.png" alt="Second slide">
          </div>
          <div class="overlay"></div>
        </div>
        <div class="carousel-item">
          <div class="carousel-item-inner">
            <img class="d-block w-100" src="../assets/images/slider-img-1@2x.png" alt="Third slide">
          </div>
          <div class="overlay"></div>
        </div>
        <div class="carousel-caption">
          <h1 class="font-xlg semi-bold">Al Foundation</h1>
          <p class="font-lg regular">is focused on inspiring the next generation of  kids Healthcare professionals.</p>
          <button type="button" class="btn btn-primary">Donate Now</button>

        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </section>
    <section class="content-wrapper-inner xy-pad" id="news">
      <div class="head">
        <h1 class="font-xlg semi-bold">Latest News</h1>
        <router-link to="/news"> <span class="font-xs regular text-green">view all </span><img class="img-fluid" src="../assets/icons/arrow.svg"></router-link>
      </div>
      <div class="news-wrapper">
          <router-link class="news-card shadow" :to="'/single/'+ article.id" v-for="article in filteredArticles" :key="article.id">
            <NewsCard :article=article :sourceCategory=sourceCategory></NewsCard>
          </router-link>

      </div>
    </section>
    <section class="content-wrapper-inner" id="bg-section">
      <div class="overlay"></div>
      <div class="text">
          <h1 class="font-xlg semi-bold">How we have helped</h1>
          <p class="font-lg regular">See how Al Foundation have promoted change locally and to the world</p>
      </div>
      <div class="square-wrapper">
        <div class="square" v-for="square in squares" :key="square.index">
            <div class="square-inner">
              <div class="square-inner-content">
              <img class="img-fluid" :src="square.img">
              <p class="font-md regular">{{square.text}}</p>
              <img class="img-fluid" src="../assets/icons/plus.svg">
            </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Square from '../components/Square';
import NewsCard from '../components/NewsCard';
import json from '../json/newsapi.json'


export default {
  name: "Home",
  components:{
    NewsCard
  },
  data(){
    return{
      squares:[
        {
          img:require('../assets/icons/location.svg'),
          text:'Find place'
        },
        {
          img:require('../assets/icons/eye.svg'),
          text:'A’awen'
        },
        {
          img:require('../assets/icons/info.svg'),
          text:'Omniyat'
        },
        {
          img:require('../assets/icons/info.svg'),
          text:'Give Time'
        },
        {
          img:require('../assets/icons/child.svg'),
          text:'Tofoula'
        },
        {
          img:require('../assets/icons/fund.svg'),
          text:'Fundraising'
        },
        {
          img:require('../assets/icons/services.svg'),
          text:'Zakat'
        },



      ],
      sourceCategory:json.sourceCategory,
      articles:json.articles,
    }
  },
  computed:{
    filteredArticles: function(){
       return this.articles.filter(article=>article.showOnHomepage?true:false)
    }
  },
  mounted(){
    console.log(this.sourceCategory)
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_mixins';
@import '../scss/_variables';
  .carousel{
    .carousel-inner{
      height: 65vh;
      .carousel-item{
        height:100%;
        .carousel-item-inner{
          height:100%;
          @include display-flex(row,center,center);
          img{
            object-fit:cover;
            height:100%;
          }
        }
      }
      .carousel-caption{
        bottom:50%;
        left:50%;
        transform:translateY(50%) translateX(-50%);
        width:40%;
        @media screen and (max-width:575.98px){
          width:100%;
        }
        @media screen and (min-width:576px) and (max-width:991.98px){
          width:60%;
        }
        p{
          margin:24px 0 !important;
        }
      }

    }
    .carousel-indicators{
    align-items:flex-end;
      li{
        width:15px;
        height:15px;
        border-radius: 50%;
        opacity:0.35;
        &.active{
          width:20px;
          height:20px;
          opacity:1;
        }
      }
    }
    .carousel-control-prev,.carousel-control-next{
      width:45px;
      height:45px;
      top:50%;
      transform:translateY(-50%);
      background-color:rgba(255,255,255,0.7);
      border-radius: 0.25rem;
      @media screen and (max-width:767.98px){
        display:none;
      }
    }
    .carousel-control-prev{
      left:10%
    }
    .carousel-control-next{
      right:10%
    }
  }
  .content-wrapper-inner{
    &#bg-section{
      background-image:url('../assets/images/slider-img-1@2x.png');
      background-size: cover;
      background-repeat: no-repeat;
      height:100vh;
      position: relative;
      @include display-flex(column, center,center);
      @media screen and (max-width:767.98px){
        height: auto;
      }
      .overlay{
        background-color: $gray-3;
      }
      .text{
        color:#fff;
        text-align:center;
        z-index:1;
        margin-bottom:6rem;
        @media screen and (max-width:991.98px){
          margin:3rem;
        }
        h1{
          margin-bottom:24px;
        }
      }
      .square-wrapper{
        @include display-flex(row, center,center);
        flex-wrap: wrap;
        width:67%;
        @media screen and (max-width:991.98px){
              width:100%;
        }
        @media screen and (min-width:992px) and (max-width:1199.98px){
          width:90%;
        }

        .square{
          width:calc(100% / 4 - 0.5rem);
          @include display-flex(row,center,center);
          @media screen and (max-width:575.98px){
            width:calc(100% / 2);
            margin-bottom:3rem;

          }
        .square-inner{
          height:200px;
          width:200px;
          border:4px solid #fff;
          transform:rotate(45deg);
          position: relative;
          color:#fff;
          @media screen and (max-width:767.98px){
              width:125px;
              height:125px;
            }
          @media screen and (min-width:768px) and (max-width:991.98px){
            width:130px;
            height:130px;
          }
          @media screen and (min-width:992px) and (max-width:1199.98px){
            width:155px;
            height:155px;

          }


          &:not(:last-of-type){
          margin:0 5.5rem 0 0;

          }

          &:hover{
            background-color: $primary;
          }
          .square-inner-content{
          transform:rotate(-45deg) translateX(-45%);
          position: absolute;
          top:-50px;
          height:100%;
          width:100%;
          left:45%;
          @include display-flex(column, space-around,center);
          @media screen and (max-width:767.98px){
            top:-29px;
          }
          @media screen and (min-width:768px) and (max-width:991.98px){
            top:-35px;
          }
          img{
            width:60px;
            height:60px;
            @media screen and (max-width:1199.98px){
              width:45px;
              height:45px;
            }

          }
          }
        }
      }
      }
    }
    &#news{
      .head{
        @include display-flex(row, space-between, center);
        margin-bottom:3rem;
        .text-green{
          text-transform: capitalize;
        }
      }
      .news-wrapper{
        @include display-flex(row, flex-start,flex-start);
        flex-wrap: wrap;
        .news-card{
          width:calc(100% / 3 - 1rem);
          margin:0 0.5rem 24px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          @media screen and (max-width:575.98px){
            width:100%;
            margin:0 0 16px 0;
          }
          @media screen and (min-width:576px) and (max-width:991.98px){
            width:calc(100% / 2 - 1rem);

          }
        }
      }
    }
  }

</style>