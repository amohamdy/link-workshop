<template>
    <footer>
        <div class="row mx-0 xy-pad" id="site-map">
            <div class="col-md-2 foot-col">
                <div class="foot-col-inner">
                    <ul>
                        <li class="font-xs regular"><a href="#">News</a></li>
                        <li class="font-xs regular"><a href="#">events</a></li>
                        <li class="font-xs regular"><a href="#">about</a></li>
                        <li class="font-xs regular"><a href="#" class="text-uppercase">faqs</a></li>
                    </ul>
                </div>

            </div>
            <div class="col-md-2 foot-col">
                <div class="foot-col-inner">
                    <ul>
                        <li class="font-xs regular"><a href="#">Privacy Policy</a></li>
                        <li class="font-xs regular"><a href="#">Contact Us</a></li>
                        <li class="font-xs regular"><a href="#">Complains</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 foot-col">
                <div class="foot-col-inner">
                    <h4 class="font-xs regular mb-4">Subscribe <span class="text-lowercase">to</span> Newsletter</h4>
                    <form>
                        <div class="form-row mx-0">
                            <div class="input-group">
                                <input type="text" class="form-control" id="email" placeholder="Email Address">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">subscribe</div>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div class="col-md-4 foot-col">
                <div class="foot-col-inner">
                    <h4 class="font-xs regular mb-4">follow <span class="text-lowercase">us on</span></h4>
                    <SocialMediaIcons :isFooter="true"></SocialMediaIcons>
                </div>
            </div>


        </div>
        <div class="row mx-0" id="copy-right">
            <p class="font-xs regular">All rights reserved - Link Development Company © 2020</p>
        </div>

    </footer>
</template>
<script>
import SocialMediaIcons from './SocialMediaIcons';
export default{
    data(){
        return{
        }
    },
    components:{
        SocialMediaIcons
    }

}
</script>



<style lang="scss" scoped>
@import '../scss/_mixins';
@import '../scss/_variables';

footer{
    background-color: $gray-1;
    text-transform: capitalize;
    color:$gray-2;
    .foot-col{
        @include display-flex(row, center, flex-start);
        @media screen and (max-width:767.98px){
            justify-content: flex-start;
            margin-bottom:24px;
        }
        form{
            .input-group{
                height: 50px;
                width:100%;
            input{
                background-color: $input-fill;
                height: 100%;
                &:focus{
                    outline: none;
                    box-shadow: none;
                }
            }
            .input-group-text{
                background-color: $primary;
                border-top-right-radius: 0.25rem;
                border-bottom-right-radius: 0.25rem;
                color:#fff;

            }
            }
        }
    }
    ul{
        li{
            margin-bottom:12px;
        }
    }

#copy-right{
    align-items: center;
    justify-content: center;
    background-color: $green;
    color:#fff;
    padding:8px;
}
}
</style>