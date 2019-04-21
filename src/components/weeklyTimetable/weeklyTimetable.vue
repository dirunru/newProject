<template>
    <div class="weeklyTimetable">
        <div class="week-head">
            <ul>
                <li>周</li>
                <li>时间</li>
                <li v-for="(item,index) in 7" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="week-body">
            <div class="week-item">
                <ul>
                    <li v-for='item in weekItems' :key="item">
                        {{item}}
                        <ul class="timeSection">
                            <li>08:00 - 10:00</li>
                            <li>10:00 - 12:00</li>
                            <li>14:00 - 16:00</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
    import index from './index.js'
    export default index
</script>


<style lang='scss' scoped>
    @import './index.scss';
</style>