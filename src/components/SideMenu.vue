<template>
    <div class="side-menu">
        <div class="side-menu-inner side-left">
            <SocialMediaIcons></SocialMediaIcons>
        </div>
        <div class="side-menu-inner side-right">
            <ul class="navigation top-nav">
                <li class="nav-item active">
                    <router-link to="/" class="font-lg semi-bold" exact :active-class="active">home</router-link>
                </li>
                <li class="nav-item">
                    <a class="font-lg semi-bold mb-2" href="">about us</a>
                    <a class="font-md regular mb-2" href="">who are us</a>
                    <a class="font-md regular mb-2" href="">Why us?</a>
                </li>
                <li class="nav-item">
                    <router-link class="font-lg semi-bold mb-2" to="/news" exact :active-class="active">news</router-link>
                    <a class="font-md regular mb-2" href="">news</a>
                    <a class="font-md regular mb-2" href="">events</a>
                </li>
                <li class="nav-item">
                    <a class="font-lg semi-bold mb-2" href="">Careers</a>
                    <a class="font-md regular mb-2" href="">Opportunities</a>
                </li>
            </ul>
            <ul class="navigation bottom-nav mt-auto">
                <li class="nav-item"><a class="font-lg semi-bold" href="">contact us</a></li>
                <li class="nav-item"><a class="font-lg semi-bold" href="">site map</a></li>

            </ul>
        </div>
    </div>
</template>

<script>
import SocialMediaIcons from './SocialMediaIcons.vue';
    export default{
        components:{
            SocialMediaIcons
        }
    }

</script>
<style lang="scss" scoped>
@import '../scss/_mixins';
@import '../scss/_variables';
    .side-menu{
        @include display-flex(row,center,center);
        width:600px;
        height:calc(100vh - 5rem);
        position: fixed;
        z-index: 18;
        background-color: $green;
        left:0;
        top:5rem;
        border:1px solid rgba(255,255,255,0.35);
        @media screen and (max-width:767.98px){
            width:300px;
            overflow: scroll;
        }
        .side-menu-inner{
            padding:2rem;
            height:100%;

            &.side-left{
            width:25%;
            border-right:1px solid rgba(225,225,225,0.05);
            @include display-flex(row, center,center);
            }
            &.side-right{
                width:75%;
                @include display-flex(column, space-between, flex-start);
                .navigation{
                @include display-flex(column, flex-start, flex-start);

                }

                li{
                    text-transform: capitalize;
                    margin:16px;

                    @include display-flex(column, flex-start, flex-start);


                    a{
                        &.font-lg{
                            color:#fff !important;
                        }
                        &.font-md{
                        color:$gray !important;
                        }
                        &.router-link-active{
                            color:$primary !important;


                        }

                    }
                }
            }

        }

    }
</style>