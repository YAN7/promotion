<template lang="html">
  <div class="page has-navbar" v-nav="{title: '我的推荐', showBackButton: true}">
    <div class="page-content personal ">
    	<div class="personal-top padding">
	    	<div class="top--head">
					<div class="top--head__promote">
						<img src="../../static/img/personal.png" height="36" width="28" alt="">
						个人推广
					</div>
					<div class="top--head__refund">
						<button class="button button-small button-stable button-outline" @click="showRefund">押金退款</button>
					</div>
	    	</div>
	    	<div class="top--commission">
					<p class="top--commission__desc">佣金</p>
					<p class="top--commission__money">&yen; 888. <span class="top--commission__decimal">00</span></p>
	    	</div>
	    	<div class="top--button">
					<md-button class="button md-button button-block top--button__withdrawal" @click="withdrawal">
						<label>提现</label>
					</md-button>
					<md-button class="button md-button button-block top--button__share" @click.native="$router.push('register')">
						<label>点击分享 立即推荐</label>
					</md-button>
	    	</div>
    	</div>
    	<div class="personal-bottom padding">
				<div class="bottom--title">
					<span>推荐记录</span>
				</div>
				<div class="bottom--record">
					<list>
						<item style="font-size: 16px; color: #333; font-weight: bold;">123 <span class="item-note bottom--record__phone">1223123****123</span></item>
						<item style="font-size: 16px; color: #333; font-weight: bold;">123 <span class="item-note bottom--record__phone">1223123****123</span></item>
						<item style="font-size: 16px; color: #333; font-weight: bold;">123 <span class="item-note bottom--record__phone">1223123****123</span></item>
						<item style="font-size: 16px; color: #333; font-weight: bold;">123 <span class="item-note bottom--record__phone">1223123****123</span></item>
					</list>
				</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    // 押金退款
    showRefund() {
      const options = {
        effect: 'slide',
        title: '确认退款?',
        cssClass: 'refundStyle',
        buttons: [
          {text: '取消'},
          {text: '确定'},
        ]
      };
      let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">已有佣金无法提现，原有推荐记录将失效。</p>', options );
      popup.show().then(btnIndex=> {
        console.log(btnIndex);
      })
    },
    // 提现
    withdrawal() {
      $toast.show("佣金为0 无法提现", 2000);
    }
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
			padding-top: 10px;
			img {
				width: 18px;
				height: auto;
				vertical-align: bottom;
			}
			.top--head__promote {
				flex: 1;
        font-size: 14px;
        color:#f89adb;
			}
			.top--head__refund {
				flex: 1;
				text-align: right;
        button {
          // top--head__refund
          min-height: 25px;
          line-height: 25px;
          padding: 0 10px;
          border-radius: 4px solid #666;
          font-size: 14px;
          color: #666;
        }
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
		}
	}
</style>
<style lang="scss">
  /*申请退款popup*/
  // .personal {
    .refundStyle {
      .popup-head{
        font-weight: bold;
        color: #333;
      }
      .popup-body {
        padding-top: 0 !important;
        color: #333;
      }
      .popup-buttons {
        button:first-of-type {
          font-size: 18px;
          color: #999;
        }
        button:last-of-type {
          font-size: 18px;
          color: #ff4e72;
        }
      }
    }
  // }
</style>
