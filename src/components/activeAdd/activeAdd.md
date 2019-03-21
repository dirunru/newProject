for (let k in row) {
        if (k.indexOf("mountingExtends") > -1 && row[k]) {
          this.editAccessoriesInfo.mountingExtends.push(JSON.parse(row[k]))
        }
      }
      this.haveEntryNum = this.editAccessoriesInfo.mountingExtends.length


       let obj = {}
      this.editEntryArr.filter((i, idx) => {
        <!-- 如果之前没有 -->
        if (this.haveEntryNum == 0) {
          obj[`mountingExtends${(idx!= 0 ? idx + 1 : '')}`] = i
          <!-- 如果之前有 -->
        }else{
          obj[`mountingExtends${(this.haveEntryNum + idx + 1)}`] = i
        }
      })
      let objNew = {}
      this.editAccessoriesInfo.mountingExtends.filter((i, id) => {
        objNew[`mountingExtends${(id != 0 ? id+1 : '')}`] = i
      })