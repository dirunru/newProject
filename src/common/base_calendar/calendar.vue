<template>
    <section class="wh_container">
        <div class="wh_content_all">
            <!-- tab年/月 -->
            <div class="wh_top_changge">
                <li @click="PreMonth(myDate,false)" class='jiantou_bg'>
                    <div class="wh_jiantou1"></div>
                </li>
                <li class="wh_content_li">{{dateTop}}</li>
                <li @click="NextMonth(myDate,false)" class='jiantou_bg'>
                    <div class="wh_jiantou2"></div>
                </li>
            </div>
            <!-- 周 -->
            <div class="wh_content tb_head">
                <div class="wh_content_item" v-for="(tag, index) in textTop" :key='index'>
                    <div class="wh_top_tag"> 周{{tag}}</div>
                </div>
            </div>
            <!-- cell -->
            <div class="wh_content">
                <div class="wh_content_item" :class="{'bg-ccc': isWeekend(item.date)}" v-for="(item,index) in list" @click="clickDay(item,index)" :key='index'>
                    <div class="wh_item_date" v-bind:class="[{ wh_isMark: item.isMark},{wh_other_dayhide:item.otherMonth!=='nowMonth'},{wh_want_dayhide:item.dayHide},{wh_isToday:item.isToday},{wh_chose_day:item.chooseDay},setClass(item)]">
                        {{item.isToday ? '今天' : item.id}}
                    </div>
                    <slot :data="item"></slot>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import timeUtil from "./calendar.js";
export default {
    data() {
        return {
            myDate: [],
            list: [],
            historyChose: [],
            dateTop: ""
        };
    },
    props: {
        markDate: {
            type: Array,
            default: () => []
        },
        markDateMore: {
            type: Array,
            default: () => []
        },
        textTop: {
            type: Array,
            default: () => ["一", "二", "三", "四", "五", "六", "日"]
        },
        sundayStart: {
            type: Boolean,
            default: () => false
        },
        agoDayHide: {
            type: String,
            default: `0`
        },
        futureDayHide: {
            type: String,
            default: `2554387200`
        }
    },
    created() {
        this.intStart();
        this.myDate = new Date();
    },
    methods: {
        intStart() {
            timeUtil.sundayStart = this.sundayStart;
        },
        setClass(data) {
            let obj = {};
            obj[data.markClassName] = data.markClassName;
            return obj;
        },
        clickDay: function(item, index) {
            if (item.otherMonth === "nowMonth" && !item.dayHide) {
                this.getList(this.myDate, item.date);
            }
            if (item.otherMonth !== "nowMonth") {
                item.otherMonth === "preMonth"
                ? this.PreMonth(item.date)
                : this.NextMonth(item.date);
            }
        },
        ChoseMonth: function(date, isChosedDay = true) {
            date = timeUtil.dateFormat(date);
            this.myDate = new Date(date);
            this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
            if (isChosedDay) {
                this.getList(this.myDate, date, isChosedDay);
            } else {
                this.getList(this.myDate);
            }
        },
        PreMonth: function(date, isChosedDay = true) {
            date = timeUtil.dateFormat(date);
            this.myDate = timeUtil.getOtherMonth(this.myDate, "preMonth");
            this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
            if (isChosedDay) {
                this.getList(this.myDate, date, isChosedDay);
            } else {
                this.getList(this.myDate);
            }
        },
        NextMonth: function(date, isChosedDay = true) {
            date = timeUtil.dateFormat(date);
            this.myDate = timeUtil.getOtherMonth(this.myDate, "nextMonth");
            console.log(date)
            this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
            if (isChosedDay) {
                this.getList(this.myDate, date, isChosedDay);
            } else {
                this.getList(this.myDate);
            }
        },
        forMatArgs: function() {
            let markDate = this.markDate;
            let markDateMore = this.markDateMore;
            markDate = markDate.map(k => {
                return timeUtil.dateFormat(k);
            });
            markDateMore = markDateMore.map(k => {
                k.date = timeUtil.dateFormat(k.date);
                return k;
            });
            return [markDate, markDateMore];
        },
        getList: function(date, chooseDay, isChosedDay = true) {
            const [markDate, markDateMore] = this.forMatArgs();
            this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
            let arr = timeUtil.getMonthList(this.myDate);
            for (let i = 0; i < arr.length; i++) {
                let markClassName = "";
                let k = arr[i];
                k.chooseDay = false;
                const nowTime = k.date;
                const t = new Date(nowTime).getTime() / 1000;
                //看每一天的class
                for (const c of markDateMore) {
                    if (c.date === nowTime) {
                        markClassName = c.className || "";
                    }
                }
                //标记选中某些天 设置class
                k.markClassName = markClassName;
                k.isMark = markDate.indexOf(nowTime) > -1;
                //无法选中某天
                k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
                if (k.isToday) {
                    this.$emit("isToday", nowTime);
                }
                let flag = !k.dayHide && k.otherMonth === "nowMonth";
                if (chooseDay && chooseDay === nowTime && flag) {
                    this.$emit("choseDay", nowTime);
                    this.historyChose.push(nowTime);
                    k.chooseDay = true;
                } else if (this.historyChose[this.historyChose.length - 1] === nowTime && !chooseDay && flag) {
                    k.chooseDay = true;
                }
            }
            if(chooseDay){//当选中某天时
                this.$emit("timeSlot", {startTiem:chooseDay,endTime:chooseDay});
            }else{
                this.$emit("timeSlot", {startTiem:arr[0].date,endTime:arr[arr.length-1].date});
            }
            this.list = arr;
        },
        isWeekend (item) {
            // 周六周日背景灰色
            var weekDay = ["日", "一", "二", "三", "四", "五", "六"];
            var myDate = new Date(Date.parse(item));
            if (weekDay[myDate.getDay()] == '日' || weekDay[myDate.getDay()] == '六') {
                return true
            } else {
                return false
            }
        }
    },
    mounted() {
        this.getList(this.myDate);
    },
    watch: {
        markDate: {
            handler(val, oldVal) {
                this.getList(this.myDate);
            },
            deep: true
        },
        markDateMore: {
            handler(val, oldVal) {
                this.getList(this.myDate);
            },
            deep: true
        },
        agoDayHide: {
            handler(val, oldVal) {
                this.getList(this.myDate);
            },
            deep: true
        },
        futureDayHide: {
            handler(val, oldVal) {
                this.getList(this.myDate);
            },
            deep: true
        },
        sundayStart: {
            handler(val, oldVal) {
                this.intStart();
                this.getList(this.myDate);
            },
            deep: true
        }
    }
};
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .wh_container {
        width: 497px;
        margin: auto;
        border: 1px solid #edeef4;
    }

    li {
        list-style-type: none;
    }
    .wh_top_changge {
        width: 200px;
        height: 60px;
        margin: 0 auto;
        display: flex;
    }

    .wh_top_changge li {
        cursor: pointer;
        display: flex;
        color: #000;
        font-size: 18px;
        flex: 1;
        justify-content: center;
        align-items: center;
        height: 32px;
        margin-top: 13px;
        border: 1px solid #ddd;
    }

    .wh_top_changge .wh_content_li {
        font-size: 14px;
        cursor: auto;
        border-left: none;
        border-right: none;
        flex: 2.5;
    }
    .wh_content_all {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
        "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
        background-color: #fff;
        width: 100%;
        overflow: hidden;
    }

    .wh_content {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .wh_content .wh_content_item {
        height: 70px;
    }

    .tb_head {
        background: #F5F5F9;
    }

    .tb_head .wh_content_item {
        height: 32px;
        line-height: 32px;
    }

    .wh_content:first-child .wh_content_item_tag,
    .wh_content:first-child .wh_content_item {
        color: #ddd;
        font-size: 16px;
    }

    .wh_content_item,
    .wh_content_item_tag {
        font-size: 15px;
        width: 14.08%;
        text-align: center;
        color: #000;
        position: relative;
    }
    .wh_content_item {
        height: 40px;
        border-top: 1px solid #EDEEF4;
        border-right: 1px solid #EDEEF4;
    }

    .wh_top_tag {
        width: 40px;
        height: 32px;
        line-height: 32px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wh_item_date {
        font-size: 13px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin: 10px auto 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;
    }

    .jiantou_bg {
        background: #EDEEF4;
    }

    .wh_jiantou1 {
        width: 12px;
        height: 12px;
        border-top: 1px solid #666;
        border-left: 1px solid #666;
        transform: rotate(-45deg);
    }

    .wh_jiantou1:active,
    .wh_jiantou2:active {
        border-color: #ddd;
    }

    .wh_jiantou2 {
        width: 12px;
        height: 12px;
        border-top: 1px solid #666;
        border-right: 1px solid #666;
        transform: rotate(45deg);
    }
    .wh_content_item > .wh_isMark {
        margin: auto;
        border-radius: 100px;
        background: blue;
        z-index: 2;
    }
    .wh_content_item .wh_other_dayhide {
        color: #bfbfbf;
    }
    .wh_content_item .wh_want_dayhide {
        color: #bfbfbf;
    }
    .wh_content_item .wh_isToday {
        background: #FFE3E7;
        color: #000;
        font-size: 12px;
        border-radius: 100px;
    }
    .wh_content_item .wh_chose_day {
        background: #EF334E;
        color: #fff;
        border-radius: 100px;
    }
    .bg-ccc {
        background: #FCFCFE;
    }
</style>
