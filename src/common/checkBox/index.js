
export default {
    data() {
        return {
            checkAll: false,
            checkList: [],
            checkBoxList: ['复选框1', '复选框2', '复选框3', '复选框4', '复选框5', '复选框6', '复选框7', '复选框8', '复选框9', '复选框10', '复选框11'],
            isIndeterminate: false,
            rotate: false
        };
    },

    components: {

    },

    computed: {},

    created() {},

    mounted() {},
    methods: {
        handleCheckAllChange(val) {
            this.checkList = val ? [...this.checkBoxList] : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.checkBoxList.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkBoxList.length;
        },
        move(i) {
            this.isIndeterminate = true;
            this.checkList.splice(i, 1);
            if(this.checkList.length == 0){
                this.checkAll = false;
                this.isIndeterminate = false;
            }
        },
        clickBox(e){
            if(e.target.className == "checkContent"){
                this.rotate = !this.rotate
            }
        }
    }
}