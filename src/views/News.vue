<template>
  <div class="content-wrapper x-pad" id="news">
    <h1 class="font-xlg semi-bold py-5">News</h1>
    <form id="filter-form">
        <div class="form-row align-items-end">
          <div class="form-group-inner col-sm-6 col-lg-2">
            <label for="from-date-filter">From</label>

            <div class="input-group date datepicker">
                <input type="text" value="" min="" max="" placeholder="Select"
                class="date-time form-control" id="from-date-filter">
                    <span class="input-group-addon"></span>
            </div>

          </div>
          <div class="form-group-inner col-sm-6 col-lg-2">
            <label for="to-date-filter">To</label>
            <div class="input-group date datepicker">
                <input type="text" value="" min="" max="" placeholder="Select"
                class="date-time form-control" id="to-date-filter">
                    <span class="input-group-addon"></span>
            </div>
          </div>
          <div class="form-group-inner col-sm-6 col-lg-2">
            <label for="sourceCategory">Category</label>
            <select id="sourceCategory" class="custom-select" v-model="category" @change="onChange">
              <option disabled value="">Select...</option>
              <option v-for="source in sourceCategory" :key="source.id" :value=source.id>{{source.name}}</option>
            </select>
          </div>
          <div class="form-group-inner col-sm-6 col-lg-5">
            <Search :show=show :filter="true" @search="filteredArticles($event)"></Search>
          </div>
          <div class="form-group-inner col-lg-1 sort">
            <div class="dropdown">
              <button class=" dropdown-toggle font-sm regular text-green border-0" type="button" id="sortDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by<img class="img-fluid ml-2" src="../assets/icons/sort.svg">
              </button>
              <div class="dropdown-menu" aria-labelledby="sortDropdown">
                <a class="dropdown-item" @click="sortedArrayAsc">A to Z</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" @click="sortedArrayDes">Z to A</a>
              </div>
            </div>
          </div>

        </div>
    </form>
    <div class="news-wrapper pb-5">
      <div class="news-wrapper-inner">
        <router-link class="news-card shadow" href="#" v-for="article in articles.slice(0,i)" :key="article.id" :to="'/single/'+ article.id">
          <NewsCard :article=article :sourceCategory=sourceCategory></NewsCard>
        </router-link>
      </div>
        <button type="button" class="btn btn-primary" @click="this.i +=3" v-if="articles.length>i">Load More</button>
    </div>
    <!-- <router-view></router-view> -->

  </div>
</template>

<script>
import NewsCard from '../components/NewsCard';
import json from '../json/newsapi.json'
import Search from '../components/Search';
export default{
  components:{
    NewsCard,
    Search
  },
  data(){
    return{
      sourceCategory:json.sourceCategory,
      articles:json.articles,
      category:'',
      show:true,
      i:3
    }
  },
  methods:{
        filteredArticles(searchText){
          this.articles=json.articles
            return (searchText !== ' ' ? this.articles= this.articles.filter(article=>article.title.toLowerCase().includes(searchText.toLowerCase())):this.articles=json.articles)
        },
        onChange(){
            this.articles=json.articles

            return this.articles = this.articles.filter(article=>article.sourceID== this.category)
        },
        sortedArrayAsc(){
          return this.articles = this.articles.sort((a, b) => a.title> b.title?1 :-1 );
      },
              sortedArrayDes(){
          return this.articles = this.articles.sort((a, b) => a.title<b.title?1 :-1 );
      }



    },

  }



</script>

<style lang="scss" scoped>
@import '../scss/_mixins';
@import '../scss/_variables';
.content-wrapper{
  &#news{
    background-color: $gray;
    #filter-form{
      margin-bottom:3.5rem;
      .form-row{
        @media screen and (max-width:575.98px){
          flex-direction: column;
        }
        .form-group-inner{
          &.sort{
            transform: translateY(-15px);
            position: relative;
            z-index:2;
            @media screen and (max-width:991.98px){
              transform: translateY(15px);
            }
            .dropdown-toggle{
              &:after{
                display:none;
              }

            }
          }
          .input-group, select{
        height: 50px;
      }
      select{
        @media screen and (max-width:575.98px){
          margin-bottom:16px;
        }
      }
      .input-group{
        &.date{
          background-color: #fff;
          border:1px solid $gray-5;
          border-radius: 0.25rem;
          align-items:center;
          input{
            border:0;
          }
            .input-group-addon{
              background-image: url('../assets/icons/date.svg');
              background-size:cover;
              background-repeat: no-repeat;
              width:25px;
              height:28px;
              margin-right:8px;
            }
        }
      }

        }


      }
    }
    .news-wrapper{
    @include display-flex(column, flex-start,center);

    .news-wrapper-inner{
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
}


</style>


