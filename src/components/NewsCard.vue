<template>
    <div class="card-inner">
        <div class="card-image">
            <img class="img-fluid" :src="article.urlToImage">
            <div class="overlay"></div>
        </div>
        <div class="card-content">
            <ul class="list share">
                <li><img class="img-fluid" src="../assets/icons/favorite.svg"></li>
                <li><img class="img-fluid" src="../assets/icons/share.svg"></li>
            </ul>
            <h2 class="font-md semi-bold">{{article.title}}</h2>
            <ul class="list tags">
                <li class="tag-item font-xs regular" v-for="source in filteredSourceCategory" :key="source.id">{{source.name}}</li>
            </ul>
            <p class="font-xs regular">{{article.content}}</p>
            <span class="date font-xs regular"><img class="img-fluid mr-3" src="../assets/icons/date.svg"> {{article.publishedAt}}</span>
        </div>
    </div>

</template>

<script>
export default{
    props:['article', 'sourceCategory'],
    computed:{
        filteredSourceCategory(){
        let article = this.article
        return this.sourceCategory.filter(function(source){
            if(source.id == article.sourceID){
                return true
            }
        })
        }
    },
}
</script>


<style lang="scss" scoped>
@import '../scss/_mixins';
@import '../scss/_variables';
.card-inner{
    @include display-flex(column, flex-start, flex-start);
    height:35rem;
    text-transform: capitalize;
    .card-image{
        height:45%;
        @include display-flex(row,center,center);
        position:relative;
        img{
            object-fit: cover;
            height: 100%;
            width:100%;
        }
    }
    .card-content{
        height:calc(100% - 45%);
        padding:0 2rem 2rem;
        @media screen and (max-width:575.98px){
            padding:0 1rem 1rem;
        }
        .list{
            @include display-flex(row, flex-start,center);
            &.share{
                justify-content: flex-end;
            }

            li{
                &.tag-item{
                background-color:$gray-4;
                border-radius:5px;
                padding:5px 16px;

                }
                margin:10px 8px 10px 0;
            }
            img{
                width:20px;
                height:20px;
            }
        }
        p,h2{
            display:-webkit-box;
            -webkit-box-orient: vertical;
            overflow:hidden;
            text-overflow: ellipsis;
        }
        h2{
            -webkit-line-clamp: 2;
            line-height: 1.5;

        }
        p{
            text-transform: lowercase;
            -webkit-line-clamp: 3;
            line-height: 1.6;
            margin-bottom:24px !important;

        }
    }
}




</style>
