<template>
    <el-row id="AddRoom">
            <el-col :span="19">
                <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                              <el-breadcrumb-item :to="{ path: '/' }">找室友信息</el-breadcrumb-item>
                              <el-breadcrumb-item>{{action}}</el-breadcrumb-item>
                        </el-breadcrumb>


                      </div>

                        <div class="text item">

                          <el-form ref="form" :model="form" :rules="rules" label-width="80px">

                            <el-form-item label="位置"  required>
                              <el-col :span="10">
                              <el-form-item prop="areaname">
                              <el-select v-model="form.areaname" placeholder="所在区(如朝阳)" >
                                <el-option label="建邺" value="建邺"></el-option>
                                <el-option label="玄武" value="玄武"></el-option>
                                <el-option label="江宁" value="江宁"></el-option>
                              </el-select>
                              </el-form-item>
                             </el-col>
                              <el-col :span="4"><el-form-item label="位置" required></el-form-item></el-col>
                              <el-col :span="10">
                              <el-form-item prop="courtname">
                              <el-input v-model="form.courtname" placeholder="输入期待租房位置(如万达附近)" ></el-input>
                              </el-form-item>
                              </el-col>
                            </el-form-item>

                            <el-form-item label="标签"  required>
                            <el-col :span="7">
                              <el-form-item prop="tag1">
                              <el-input v-model="form.tag1"   placeholder="可输年龄信息(如80后、90后)"></el-input>
                              </el-form-item>
                            </el-col>

                              <el-col :span="1">.</el-col>
                              <el-col :span="7">
                              <el-form-item prop="tag2">
                              <el-input v-model="form.tag2"  placeholder="可输职业信息(如it、金融等)"></el-input>
                              </el-form-item>
                              </el-col>
                              <el-col :span="1">.</el-col>
                              <el-col :span="8">
                              <el-form-item prop="tag3">
                              <el-input v-model="form.tag3"  placeholder="其他标签"></el-input>
                              </el-form-item>
                              </el-col>
                            </el-form-item>

                            <el-form-item label="小区周边" require prop="surroundinginfo">
                             <el-radio-group v-model="form.identification">
                                <el-radio  label="0">无房共同找</el-radio>
                                <el-radio  label="1">有房求室友</el-radio>
                             </el-radio-group>
                            </el-form-item>
                            <el-form-item label="正文" require prop="roominfo">
                              <el-input type="textarea" placeholder="介绍一下自己和期待租房的价位、位置、装修、室友要求等..." v-model="form.roominfo"></el-input>
                              <div id="editorElem" style="text-align:left"></div>
                              <el-button v-on:click="getContent">查看内容</el-button>

                            </el-form-item>
                              <el-form-item>
                              <el-button type="primary" @click="submitForm('form')">{{gonext}}</el-button>
                              <el-button @click="resetForm('form')">重置</el-button>
                            </el-form-item>
                          </el-form>

                      </div>
                </el-card>
            </el-col>
        <el-col :span="5">.</el-col>
    </el-row>
</template>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card{
    margin-top:30px;
  }

  #AddRoom {
    text-align: left;
  }

</style>

<script>
  import E from 'wangeditor'
  var editor = new E('#editorElem')
export default {
    data() {
      return {
        editorContent: '',
        radio: '1',
        action:"添加",
        gonext:"立即创建",
        form: {
          areaname:'',
          courtname:'',
          tag1:'',
          tag2:'',
          tag3:'',
          identification:'0',
          surroundinginfo:'',

        },
        rules: {
          courtname: [
            { required: true, message: '请输入位置', trigger: 'blur' },
            { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
          ],
          areaname: [
            { required: true, message: '请选择所在区', trigger: 'change' }
          ],
          tag1: [
            {  required: true, message: '请输入标签', trigger: 'change' }
          ],
          tag2: [
            {  required: true, message: '请输入标签', trigger: 'change' }
          ],
          tag3: [
            {  required: true, message: '请输入标签', trigger: 'change' }
          ],
          identification: [
            {  required: true, message: '请选择', trigger: 'change' }
          ],
          roominfo: [
            { required: true, message: '请输入正文', trigger: 'blur' }
          ]
        }
      }
    },
    mounted:function () {


      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()
      if(this.$route.params.id)
          this.getRoom();
      },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      },
      cancelForm(){
        this.$router.push("/postrooms");
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getRoom(){
            var id=this.$route.params.id;
            //alert(id);
            //alert(this.dynamicSegment);
           this.editorContent='111';
            var gvue=this;
            this.$ajax({
                  method: 'get',
                  url: 'api/room/'+id+'?time='+new Date().getTime(),
                  changeOrigin:true,
                }).then(function (response) {
                  console.log(response.data);
                  gvue.form=response.data[0];
                  gvue.form.identification=response.data[0].identification+'';
                  gvue.action="编辑 (房间号:"+id+")";
                  gvue.gonext="立即修改";
                  gvue.editorContent=response.data[0].roominfo;
              editor.txt.html(response.data[0].roominfo);
                })
                .catch(function (error) {
                  console.log(error);
                });
          },
      submitForm(form) {//2表示是求组
        console.log('submit!');
        this.$refs[form].validate((valid) => {
          if (valid) {
              //alert('submit!');
              var url = 'api/roommate/add?time='+new Date().getTime();
              if(this.$route.params.id)
                 url = 'api/room/edit?time='+new Date().getTime();
              var gvue=this;
             this.form.roominfo=this.editorContent;

              this.$ajax({
                  method: 'post',
                  url:url ,
                  changeOrigin:true,
                  data: this.form//"courtname="+this.form.courtname+"&areaname="+this.form.areaname
               }).then(function (response) {
                  console.log(response);
                  if(response.data.ret_code===0){
                      gvue.$message({
                        showClose: true,
                        message: response.data.ret_msg+'，操作成功1',
                        type: 'success'
                      });
                      //gvue.$router.push("/addroom2/"+response.data.ret_roomid);
                      gvue.$router.push("/postrooms");
                  }

                })
                .catch(function (error) {
                  console.log(error);
                });


          } else {
                  console.log('error submit!!');
                  return false;
          }
        });
      }
    }
  }
</script>