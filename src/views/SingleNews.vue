<template>
<div class="content-wrapper xy-pad" id="single">
    <h1 class="font-xlg semi-bold pb-5">News Details</h1>
    <div class="details-card shadow">
        <NewsCard :article=articles[this.id-1] :sourceCategory=sourceCategory :isSingle=true></NewsCard>
    </div>
    <div class="related-cards-wrapper py-5">
        <h1 class="font-xlg semi-bold pb-5 w-100">Related Topics</h1>
        <div class="related-card"  v-for="card in relevantCards" :key="card.index">
            <div class="card-inner">
                <img class="img-fluid" :src="card.img">
                <div class="card-content">
                    <small class="font-xs light">Category</small>
                    <h2 class="font-lg bold">{{card.title}}</h2>
                    <a class="font-sm regular text-green">View Details<img class="img-fluid ml-2" src="../assets/icons/arrow.svg"></a>
                </div>
            </div>
        </div>
        <router-link to="" class="ml-auto"> <span class="font-xs regular text-green">view all </span><img class="img-fluid" src="../assets/icons/arrow.svg"></router-link>

    </div>
</div>
</template>

<script>
import NewsCard from '../components/NewsCard';
import json from '../json/newsapi.json'

export default{
    data(){
        return{
            articles:json.articles,
            sourceCategory:json.sourceCategory,
            relevantCards:[
                {
                    img:require('../assets/images/releveant-card-1@2x.png'),
                    title:'New artificial intelligence apps'
                },
                {
                    img:require('../assets/images/releveant-card-2@2x.png'),
                    title:'Technology development seminar'
                },
                {
                    img:require('../assets/images/releveant-card-3@2x.png'),
                    title:'next step of IOT [internet of things]'
                }
            ]
        }
    },
    components:{
        NewsCard,
    },
    props:['id'],
}
</script>

<style lang="scss" scoped>
@import '../scss/_mixins';
@import '../scss/_variables';
    .content-wrapper{
        &#single{
            background-color: $gray;
            .related-cards-wrapper{
                @include display-flex(row,flex-start,flex-start);
                flex-wrap: wrap;
                .related-card{
                    width:calc(100% / 3 - 2rem);
                    margin:1rem;
                    @media screen and (max-width:575.98px){
                        width:100%;
                        margin:0 0 16px 0;
                    }
                    @media screen and (min-width:576px) and (max-width:991.98px){
                        width:calc(100% / 2 - 1rem);
                        margin:0.5rem;

                    }

                    .card-inner{
                        height:28rem;
                        @include display-flex(row,center,center);
                        position: relative;
                        >img{
                            object-fit: cover;
                            width:100%;
                            height: 100%;
                        }
                        .card-content{
                            position: absolute;
                            bottom:16px;
                            background-color:rgba(255,255,255,0.85);
                            width:95%;
                            min-height:40%;
                            padding:16px;
                            border-radius: 0.25rem;;
                            img{
                                width:20px;
                                height:20px;
                            }
                            h2{
                                margin:0 0 16px 0;
                                width:85%;
                            @media screen and (max-width:991.98px){
                                    width:100%;
                                }

                            }

                        }
                    }
                }
            }
        }
    }
</style>