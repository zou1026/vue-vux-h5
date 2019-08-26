export default {
    visitStatus(val) {
      return val == 0 ? "待分配" : val == 1 ? "已完成" : val == 2 ? "已取消" : val == 3 ? "约看未到" : val == 4 ? "等待来访" : val == 5 ? "驳回" : "全部约看"
    },
    imgConnect(url) {
      url = typeof url == 'string' ? url : '';
      if (url == '') {
        return ''
      }
      if (url.indexOf('http') == 0) {
        return url + '?imageslim';
      }
      return process.env.QINIU_URL + url + '?imageslim';
    },
    identityType(val) {
      switch (val) {
        case 1:
          return '房主'
        case 2:
          return '同住人'
        case 3:
          return '企业入住人'
      }
    },
    GuestStatus(val) {
      switch (val) {
        case 0:
          return "已邀请"
          break;
        case 1:
          return "入驻中"
          break;
        case 2:
          return "已迁出"
          break;
        case 3:
          return "待办理"
          break;
        case 4:
          return "合同待审核";
          break;
        case 5:
          return "已拒绝";
          break;
        case 6:
          return "待交接";
          break;
        case 7:
          return "待入住";
          break;
      }
    },
    category(val) {
      return val == 1 ? "个人" : "企业"
    },
    billStatus(val) {
      switch (val) {
        case 0:
          return '未启用'
        case 1:
          return '待收款'
        case 2:
          return '已收款'
      }
    }, 
    contractState(val) {
      return ['', '待签署', '已生效', '已失效', '已终止'][val]
    },
    contractstatus(val) {
      return val == 1
        ? "待审核"
        : val == 2
          ? "审核通过"
          : val == 3
            ? "已驳回"
            : "用户取消";
    },
    contractasign(val) {
      return ['待审核','审核通过'][val]
    },
    
    houseType(val) {
      return val == 1 ? '[整租]' : '[合租]'
    },
    roomState(val) {
      return ['未退租', '待验房', '已验房', '客户确认'][val]
    },
    changeRentState(val) {
      return ['申请中', '待换租', '已换租', '已失效'][val]
    },
  
    operationType(val) {
      return ['', '提交合同', '社区运营官同意签署，合同已生效', '完成首期款缴纳', '申请提前退租', '取消提前退租', '申请延期退租', '同意延期退租', '驳回延期退租', '已退租', '已验房', '用户已确认清算', '驳回签署', '等待验房', '待退款', '待补缴','已完成'][val]
    },
    cancelRentStatus(val) {
      return ['待验房', '已验房', '待退款', '待补缴', '已完成'][val]
    },
    certno(val) {
      return val.substr(0, 6) + "********" + val.substr(14, val.length);
    },
    isRent(val) {
      return val ? "续租" : "";
    },
    sort(val) {
      if (val == 1) {
        return "首期款"
      } else if(val == 100){
        return "延期款"
      } else if (val == 101) {
        return "换租款"
      }else {
        return val + "期款"
      }
    },
    // sub(val) {
    //   return [
    //     "",
    //     "提交合同",
    //     "社区运营官同意签署,合同已生效",
    //     "完成首期款缴纳",
    //     "提前退租-社区运营官",
    //     "取消提前退租-社区运营官",
    //     "申请延期退租",
    //     "同意延期-社区运营官",
    //     "驳回延期",
    //     "已退租",
    //     "已验房-社区运营官",
    //     "用户确认清算"
    //   ][val];
    // },
    sub(val) {
      switch (val) {
        case 0:
          return ""
        case 1:
          return "提交合同"
        case 2:
          return "社区运营官同意签署,合同已生效"
        case 3:
          return "完成首期款缴纳"
        case 4:
          return "提前退租-社区运营官"
        case 5:
          return "取消提前退租-社区运营官"
        case 6:
          return "申请延期退租"
        case 7:
          return "同意延期-社区运营官"
        case 8:
          return "驳回延期"
        case 9:
          return "已退租"
        case 10:
          return "已验房-社区运营官"
        case 11:
          return "用户确认清算"
        case 21:
         return "生成换租合同"
        case 22:
         return "店长签署换租合同"
        case 23:
         return "签署换租合同"
        case 24:
         return "完成换租账单缴纳"
        case 25:
         return "换租合同已失效"
  
      }
    },
    
    industry(val) {
      return [
        "房产建筑",
        "汽车/机械/制造",
        "IT互联网",
        "文化传媒",
        "电子通信",
        "金融",
        "教育培训",
        "医疗生物",
        "政府法律",
        "服务业",
        "轻工贸易",
        "农林牧渔",
        "化工能源",
        "学生",
        "其他"
      ][val];
    },
    relation(data) {
      if (data === 1) {
        return "家属";
      } else if (data === 2) {
        return "同事";
      } else if (data === 3) {
        return "同学";
      } else if (data === 4) {
        return "密友";
      } else {
        return "其他";
      }
    },
    orderStatus(val) {
      if (val) {
        return "已处理";
      } else {
        return "待处理";
      }
    },
    delayStatus(val){
      return ['待审核','审核通过','已驳回','取消申请'][val]
    },
    advanceStatus(val){
      return ['已生效', '已取消'][val]
    },
    feeType(val){
      return ['','房租费', '物业费', '宽带费', '押金费', '水费', '网络安装费', '系统只能系统管理费','电费','服务费'][val]
    },
    roomStatus(val) {
      switch (val) {
        case 0:
          return '启用该房间!'
        case 1:
          return '出租该房间!'
        case 2:
          return '冻结该房间!'
      }
    }
  }