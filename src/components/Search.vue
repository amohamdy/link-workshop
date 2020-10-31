<template>
    <div class="input-group" :class="{filter : filter}">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-if="show" v-model="searchText" @keydown.enter.prevent="$emit('search', this.searchText)">
        <div class="input-group-prepend" @click="$emit('search', this.searchText)">
            <span class="input-group-text" id="basic-addon1" @click="$emit('expand')" :class="{active : show}"><img class="img-fluid" src="../assets/icons/search.svg"></span>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            searchText:''
        }
    },
    props:['show', 'filter'],

}

</script>

<style lang="scss" scoped>
@import '../scss/_mixins';
@import '../scss/_variables';

    .input-group{
        height:100%;
        flex-wrap:nowrap;
        &.filter{
            .input-group-text{
                background-color: $primary !important;
            }
            input{
                background-color: #fff;
                height:50px;
                color:#000;
            }
        }

        .input-group-prepend{
            .input-group-text{
                background-color:transparent;
                border-top-right-radius: 0.25rem;
                border-bottom-right-radius: 0.25rem;
                border:0;
                padding:8px 12px;
                img{
                    width:25px;
                }

                &:hover{
                    background-color:$primary
                }
                &.active{
                    background-color: rgba(0,0,0,0.3);

                }
            }
        }
        input{
            background-color: rgba(0,0,0,0.3);
            color:rgba(225,255,255,0.7);
            border:0;
            height:100%;
            width:250px;
        }

    }
</style>