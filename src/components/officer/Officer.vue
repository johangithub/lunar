<template>
<div>
    <div class="container">
        <div class="row" id="searchBar">
            <div class="col-lg-8 col-lg-offset-2">
                <div class="input-group" >
                    <input type="text" class="form-control" placeholder="Search by Name, ID...">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Search</button>
                    </span>
                </div>
            </div>
        </div>
        </div>
        <officer-detail></officer-detail>  
</div>
</template>
<script>
import OfficerDetail from './officer/OfficerDetail'
    export default {
        components: {
            OfficerDetail
        }
    }
</script>
<style>
#searchBar {
    margin: 20px 0 20px 0;
}
input[type="text"][readonly] {
    color:black;
}
.form-inline label {
    margin: 0 0 0 10px;
}

.navbar{
    display: flex;
}
</style>