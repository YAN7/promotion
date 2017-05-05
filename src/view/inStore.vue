<template lang="html">
  <div class="page">
    <div class="page-content personal ">
    	<div class="personal-top padding">
	    	<div class="top--head">
					<div class="top--head__promote">
						<img src="../../static/img/store.png" height="36" width="28" alt="">
						医美店家
					</div>
					<div class="top--head__refund">
						<button @click="$router.push('applyStore')" class="button button-small button-stable button-outline ">店家认证</button>
					</div>
	    	</div>
	    	<div class="top--commission">
					<p class="top--commission__desc">佣金</p>
					<p class="top--commission__money">&yen; 0.<span class="top--commission__decimal">00</span></p>
	    	</div>
	    	<div class="top--button">
					<md-button class="button button-block top--button__share" @click.native="showShare = true">
						<label>点击分享 立即推荐</label>
					</md-button>
	    	</div>
    	</div>
    	<div class="personal-bottom padding">
				<div class="bottom--title">
					<span>推荐记录</span>
				</div>
        <div class="bottom--record">
					<list v-if="recommendedRecorLists.length > 0">
						<item v-for="list in recommendedRecorLists" style="font-size: 16px; color: #333; font-weight: bold;">{{list.nickname}}<span class="item-note bottom--record__phone">{{list.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}}</span></item>
					</list>
          <p v-else class="bottom--record__noRecord">暂无推荐记录</p>
				</div>
    	</div>
      <!-- 点击提示右上角分享 -->
      <div class="shareTips" v-show="showShare" @click="showShare = false">
        <img class="shareTips__img" src="./../../static/img/wechatShareTips.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import postWithAuth from './../utils/httpRequest';
export default {
  data() {
    return {
      recommendedRecorLists: [],
      showShare: false
    }
  },
  mounted() {
    this.WxSdk.init(1);
    this.getRecommendedRecord();
  },
  methods: {
    // 推荐记录
    getRecommendedRecord() {
      postWithAuth('promote/?method=promoter.distrBindList', {promoter_type: 2}, (re)=> {
        if (re.state) {
          this.recommendedRecorLists = re.data.list;
        } else {
          $toast.show(re.msg, 500);
        }
      }, (re)=> {$toast.show(re.msg, 500)})
    },
  }
}
</script>

<style lang="scss" scoped>
	.personal-top {
		// 分割
		background-color: #fff !important;
		// 头部按钮
		.top--head {
			display: flex;
			justify-contetn: space-around;
			img {
				width: 18px;
				height: auto;
				vertical-align: middle;
        margin-right: 5px;
			}
			.top--head__promote {
				flex: 1;
        color:#9fc5f8;
			}
			.top--head__refund {
				flex: 1;
				text-align: right;
			}
		}
		// 佣金
		.top--commission {
			margin-top: 30px;
			margin-bottom: 60px;
			text-align: center;
			.top--commission__desc {
				font-size: 16px;
				color: #666;
			}
			.top--commission__money {
				font-size: 40px;
				// font-weight: bold;
				color: #333;
				margin-top: 15px;
			}
			.top--commission__decimal {
				font-size: 30px;
			}
		}
		// 按钮
		.top--button {
			.top--button__withdrawal,
			.top--button__share {
				background-color: #15d78e;
				color: #fff;
				label {
					font-weight: bold;
          font-size: 18px;
				}
			}
			.top--button__share {
				background-color: #ff365d;
			}
		}
	}
	.personal-bottom {
		margin-top: 10px;
		padding-bottom: 0;
		background-color: #fff !important;
		.bottom--title {
      // text-align: center;
			height: 51px;
			color: #999;
			font-size: 14px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			// z-index： 1；
      // background-color: red;
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-350%,-50%);
        width: 18px;
        height: 2px;
        background-color: #ddd;
			}
      &:after {
        transform: translate(250%,-50%);
      }
			span {
				display: block;
				position: relative;
			}
		}
		.bottom--record {
			.bottom--record__phone {
				color: #666;
				font-size: 16px;
			}
      .bottom--record__noRecord {
        color: #666;
        height: 40px;
        text-align: center;
      }
		}
	}
  .shareTips {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, .4);
    .shareTips__img {
      width: 70%;
      position: absolute;
      right: 10px;
      top: 25px;
    }
  }
</style>
