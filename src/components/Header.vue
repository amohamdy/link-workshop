<template>
    <nav class="navbar navbar-expand-lg x-pad">
        <div class="nav-left">
            <a class="navbar-menu open mr-5" @click.prevent="$emit('show-menu')"  v-if="!menuShow"><img class="img-fluid" src="../assets/icons/Menu.svg"></a>
            <a class="navbar-menu mr-5" href="#" @click.prevent="$emit('close-menu')" v-else><img class="img-fluid" src="../assets/icons/close.svg" ></a>
            <a class="navbar-brand" href="#"><img class="img-fluid" src="../assets/icons/link-logo.svg" ></a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <form class="form-inline my-2 my-lg-0">
                        <div class="input-group">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-if="show">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1" @click="show=!show" :class="{active : show}"><img class="img-fluid" src="../assets/icons/search.svg"></span>
                            </div>

                        </div>
                    </form>
                </li>
                <li class="nav-item">
                    <a class="nav-link user-info" href="#">
                        <div class="user-info-image"></div>
                        <h4 class="font-xs light">user name</h4>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.848" height="31" viewBox="0 0 27.848 31"><path d="M138.02,421.625a4.693,4.693,0,0,1-4.688-4.688.938.938,0,0,1,1.875,0,2.812,2.812,0,0,0,5.625,0,.938.938,0,0,1,1.875,0A4.693,4.693,0,0,1,138.02,421.625Zm0,0" transform="translate(-125.52 -390.625)" fill="#fff"/><path d="M22.812,86.5H2.187A2.188,2.188,0,0,1,.765,82.65a.864.864,0,0,1,.1-.075A8.4,8.4,0,0,0,3.75,76.238V72.75A8.76,8.76,0,0,1,12.5,64a3.765,3.765,0,0,1,.616.038.937.937,0,1,1-.308,1.849,1.966,1.966,0,0,0-.309-.011A6.883,6.883,0,0,0,5.625,72.75v3.487A10.281,10.281,0,0,1,2,84.076c-.019.015-.035.029-.055.043a.309.309,0,0,0-.066.194.316.316,0,0,0,.312.312H22.812a.316.316,0,0,0,.313-.312.3.3,0,0,0-.068-.194c-.019-.014-.035-.027-.054-.043a10.278,10.278,0,0,1-3.629-7.839V74.875a.937.937,0,1,1,1.875,0v1.362a8.4,8.4,0,0,0,2.889,6.341.911.911,0,0,1,.1.073A2.187,2.187,0,0,1,22.812,86.5Zm0,0" transform="translate(0 -59.25)" fill="#fff"/><path d="M268.512,6.25A6.25,6.25,0,1,1,262.262,0,6.25,6.25,0,0,1,268.512,6.25Zm0,0" transform="translate(-240.664)" fill="#8dc043"/></svg>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="img-fluid" src="../assets/icons/settings.svg">
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>

            </ul>
        </div>
    </nav>
</template>
<script>
    export default{
        data(){
            return{
                show:false
            }
        },
        props:['menuShow']

    }
</script>

<style lang="scss" scoped>
@import '../scss/_mixins';
@import '../scss/_variables';

    nav{
        background-color:$green;
        height:5rem;
        position: fixed;
        left:0;
        top:0;
        width:100%;
        z-index:1;
        .navbar-menu{
            img{
                width:30px;
            }
        }
        ul{

            align-items:center;
        .nav-item{

            height:45px;

            &:not(:last-of-type){
                margin-right:24px;
            }

            img,svg{
                width:25px;
                height:25px;
            }


            .nav-link{
                text-transform: capitalize;
                height: 100%;
                padding:8px 12px;
                &.dropdown-toggle{
                    &:after{
                        display: none;
                    }
                    &:hover{
                    background-color:$primary;
                    border-radius:0.25rem;
                    svg{
                        path{
                            &:last-of-type{
                                fill:#fff;
                            }
                        }
                    }
                    }


                }
                &.user-info{
                    @include display-flex(row, flex-start,center);

                    .user-info-image{
                    background:url('../assets/images/user.jpg') no-repeat ;
                    background-size:cover;
                    border-radius: 50%;
                    width:40px;
                    height:40px;
                    margin-right:16px;
                    }
                    h4{
                        color:#fff;

                    }
                }

            }
            form{
                height:100%;
                .input-group{
                    height:100%;

                    .input-group-prepend{
                        .input-group-text{
                            background-color:transparent;
                            border-top-right-radius: 0.25rem;
                            border-bottom-right-radius: 0.25rem;
                            border:0;
                            padding:8px 12px;

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
                        border:0;
                        height:100%;
                        width:250px;
                        }

                    }
                }
            }
        }
    }


</style>