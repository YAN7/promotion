<template lang="html">
  <div class="page has-navbar" v-nav="{title: '我的推荐', showBackButton: true}">
    <div class="page-content personal ">
    	<div class="personal-top padding">
	    	<div class="top--head">
					<div class="top--head__promote">
						<img src="../../static/img/store.png" height="36" width="28" alt="">
						医美店家
					</div>
					<div class="top--head__refund">
						<button class="button button-small button-stable button-outline ">店家认证</button>
					</div>
	    	</div>
	    	<div class="top--commission">
					<p class="top--commission__desc">佣金</p>
					<p class="top--commission__money">&yen; 888. <span class="top--commission__decimal">00</span></p>
	    	</div>
	    	<div class="top--button">
					<router-link class="button button-block  top--button__share" to="/">
						<label>点击分享 立即推荐</label>
					</router-link>
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
				font-weight: bold;
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
			z-index： 1；
			span {
				display: block;
				position: relative;
				&:after {
					content: "";
					position: absolute;
					top: 50%;
					left: 0;
					background-color: red;
					width: 16px;
					height: 2px;
				}
			}
			&:after {
				// right: 0;
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
