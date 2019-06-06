<template>
  <div>
    <div class="box">
      <item v-for="(item,index) in target"
            class="item"
            :msg="item.name"
            :key="index"
            @rm="remove(item,index)">
      </item>
      <input type="text"
             class="inputTag"
             v-model="tagName"
             @keyup.enter="save"
             @focus="show = true">
      <i class='pointer'
         style="float:right;line-height:32px"
         @click="show = !show"
         :class="[show?'el-icon-arrow-down':'el-icon-arrow-up']"></i>
    </div>
    <div class="boxContent"
         v-if='show'>
      <tag v-for="(item,index) in sources"
           class="tag"
           :msg="item.name"
           :key="index"
           @add="addTag(item)">
      </tag>
    </div>
    <div class="btnList">
      <el-button @click="bindAccount(info)">绑定账号</el-button>
      <el-button>删除</el-button>
      <el-button>找回密码</el-button>
    </div>
    <el-dialog :title="popData.title"
               :visible.sync="popData.visible"
               append-to-body
               width="400px">
      <bind-account v-if="popData.visible"
                    :data="popData.data"
                    @success="onBindSuccess"
                    @cancel="onBindCancel">
      </bind-account>
    </el-dialog>
  </div>
</template>


<script>
  import bindAccount from "@/common/bindAccount.vue"
  export default {
    data() {
      return {
        tagName: '',
        sources: [{
          id: 1,
          name: '语文'
        }, {
          id: 2,
          name: '数学'
        }],
        target: [],
        show: false,
        popData: {
          visible: false,
          title: '绑定账号'
        },
        info: {
          user_id: 1,
          user_name: '底润茹'
        }
      };
    },
    components: {
      bindAccount,
      item: {
        props: ['msg'],
        template: `<div>{{ msg }}<i class="el-icon-close pointer" style="color:#999999;fontSize:8px;marginLeft:2px" @click="$emit('rm')"></i></div>`
      },
      tag: {
        props: ['msg'],
        template: `<div @click="$emit('add')">{{ msg }}</div>`
      }
    },
    methods: {
      remove(item, index) {
        this.target.splice(index, 1);
      },
      addTag(item) {
        let arr = [];
        this.target.map(k => {
          arr.push(k.name)
        });
        let status = arr.indexOf(item.name);
        if (status < 0) {
          this.target.push(item);
        }
      },
      save() {
        let obj = {};
        obj.name = this.tagName;
        // this.sources.push(obj);
        this.target.push(obj);
        this.tagName = '';
      },
      bindAccount(data) {
        this.popData.data = data;
        this.popData.visible = true;
      },
      onBindSuccess(data) {
        this.popData.visible = false;
        console.log(data);
      },
      onBindCancel() {
        this.popData.visible = false;
      }
    }
  }

</script>


<style lang='scss' scoped>
.box {
  width: 80%;
  padding: 0 5px;
  line-height: 32px;
  min-height: 32px;
  border: solid 1px gray;
  vertical-align: middle;
  border-radius: 2px;
  text-align: left;

  .item {
    display: inline-block;
    line-height: 26px;
    height: 26px;
    background: #f5f5f9;
    border-radius: 2px;
    padding: 0 5px;
    margin: 2px;
  }

  .inputTag {
    min-width: 30px;
  }
}

.boxContent {
  width: 80%;
  padding: 0 5px;
  line-height: 32px;
  min-height: 32px;
  border: solid 1px gray;
  vertical-align: middle;
  border-radius: 2px;
  text-align: left;

  .tag {
    display: inline-block;
    line-height: 26px;
    height: 26px;
    background: #f5f5f9;
    border-radius: 2px;
    padding: 0 5px;
    margin: 2px;
  }
}

.btnList {
  margin-top: 20px;
}
</style>
