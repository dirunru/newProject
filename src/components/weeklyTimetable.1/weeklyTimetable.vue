<template>
    <div class="weeklyTimetable">
        <div class="left">
            <table cellspacing="0">
                <tr>
                    <th width="100">周</th>
                    <th width="120">日期</th>
                </tr>
                <tr v-for='(day,idx) in weekDays' :key='idx'>
                    <td class="weekItem"><span>{{day.day}}</span><span class='date'>{{day.date}}</span></td>
                    <td class="timeSlot">
                        <p v-for='(timeItem,i) in day.timeSlot' :key="i">
                            {{timeItem}}
                        </p>
                    </td>
                </tr>
            </table>
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