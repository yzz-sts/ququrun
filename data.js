// ===== 杀戮尖塔2 Beta 故障机器人 完整卡牌数据 =====
// 数据来源: https://sts2.huijiwiki.com/wiki/故障机器人
// 更新日期: 2026-06-08

const classConfig = { name: "故障机器人", icon: "🔵", color: "#4fc3f7" };

const rarityConfig = {
    "basic": { name: "初始", color: "#9e9e9e" },
    "common": { name: "普通", color: "#9e9e9e" },
    "uncommon": { name: "罕见", color: "#4fc3f7" },
    "rare": { name: "稀有", color: "#ffd54f" },
    "ancient": { name: "先古", color: "#ff6e40" }
};

const typeConfig = {
    "attack": { name: "攻击", icon: "⚔️", cssBg: "linear-gradient(180deg, #8b2020 0%, #4a1010 100%)" },
    "skill": { name: "技能", icon: "🛡️", cssBg: "linear-gradient(180deg, #1a4a7a 0%, #0d2340 100%)" },
    "power": { name: "能力", icon: "⚡", cssBg: "linear-gradient(180deg, #5a4a1a 0%, #2a2008 100%)" }
};

const knownImages = {
    "打击": { normal: "images/240px-Strike_defect.webp", upgraded: "images/240px-Strike_defect_upgrade.webp" },
    "光束射线": { normal: "images/240px-Beam_cell.webp", upgraded: "images/240px-Beam_cell_upgrade.webp" },
    "眼部攻击": { normal: "images/240px-Go_for_the_eyes.webp", upgraded: "images/240px-Go_for_the_eyes_upgrade.webp" },
    "爪击": { normal: "images/240px-Claw.webp", upgraded: "images/240px-Claw_upgrade.webp" },
    "编译冲击": { normal: "images/240px-Compile_driver.webp", upgraded: "images/240px-Compile_driver_upgrade.webp" },
    "趁势打击": { normal: "images/240px-Momentum_strike.webp", upgraded: "images/240px-Momentum_strike_upgrade.webp" },
    "弹幕齐射": { normal: "images/240px-Barrage.webp", upgraded: "images/240px-Barrage_upgrade.webp" },
    "寒流": { normal: "images/240px-Cold_snap.webp", upgraded: "images/240px-Cold_snap_upgrade.webp" },
    "集中打击": { normal: "images/240px-Focused_strike.webp", upgraded: "images/240px-Focused_strike_upgrade.webp" },
    "球状闪电": { normal: "images/240px-Ball_lightning.webp", upgraded: "images/240px-Ball_lightning_upgrade.webp" },
    "扫荡射线": { normal: "images/240px-Sweeping_beam.webp", upgraded: "images/240px-Sweeping_beam_upgrade.webp" },
    "污秽攻击": { normal: "images/240px-Gunk_up.webp", upgraded: "images/240px-Gunk_up_upgrade.webp" },
    "骚动": { normal: "images/240px-Uproar.webp", upgraded: "images/240px-Uproar_upgrade.webp" },
    "超越光速": { normal: "images/240px-Ftl.webp", upgraded: "images/240px-Ftl_upgrade.webp" },
    "特斯拉线圈": { normal: "images/240px-Tesla_coil.webp", upgraded: "images/240px-Tesla_coil_upgrade.webp" },
    "刮削": { normal: "images/240px-Scrape.webp", upgraded: "images/240px-Scrape_upgrade.webp" },
    "火箭飞拳": { normal: "images/240px-Rocket_punch.webp", upgraded: "images/240px-Rocket_punch_upgrade.webp" },
    "空值": { normal: "images/240px-Null.webp", upgraded: "images/240px-Null_upgrade.webp" },
    "人工合成": { normal: "images/240px-Synthesis.webp", upgraded: "images/240px-Synthesis_upgrade.webp" },
    "分离": { normal: "images/240px-Sunder.webp", upgraded: "images/240px-Sunder_upgrade.webp" },
    "折射": { normal: "images/240px-Refract.webp", upgraded: "images/240px-Refract_upgrade.webp" },
    "螺旋钻击": { normal: "images/240px-Helix_drill.webp", upgraded: "images/240px-Helix_drill_upgrade.webp" },
    "打碎": { normal: "images/240px-Shatter.webp", upgraded: "images/240px-Shatter_upgrade.webp" },
    "超能光束": { normal: "images/240px-Hyperbeam.webp", upgraded: "images/240px-Hyperbeam_upgrade.webp" },
    "散射炮": { normal: "images/240px-Flak_cannon.webp", upgraded: "images/240px-Flak_cannon_upgrade.webp" },
    "适应打击": { normal: "images/240px-Adaptive_strike.webp", upgraded: "images/240px-Adaptive_strike_upgrade.webp" },
    "万物一心": { normal: "images/240px-All_for_one.webp", upgraded: "images/240px-All_for_one_upgrade.webp" },
    "冰之长枪": { normal: "images/240px-Ice_lance.webp", upgraded: "images/240px-Ice_lance_upgrade.webp" },
    "陨石打击": { normal: "images/240px-Meteor_strike.webp", upgraded: "images/240px-Meteor_strike_upgrade.webp" },
    "电击": { normal: "images/240px-Zap.webp", upgraded: "images/240px-Zap_upgrade.webp" },
    "防御": { normal: "images/240px-Defend_defect.webp", upgraded: "images/240px-Defend_defect_upgrade.webp" },
    "双重释放": { normal: "images/240px-Dualcast.webp", upgraded: "images/240px-Dualcast_upgrade.webp" },
    "高速脱离": { normal: "images/240px-Boost_away.webp", upgraded: "images/240px-Boost_away_upgrade.webp" },
    "内核加速": { normal: "images/240px-Turbo.webp", upgraded: "images/240px-Turbo_upgrade.webp" },
    "热修复": { normal: "images/240px-Hotfix.webp", upgraded: "images/240px-Hotfix_upgrade.webp" },
    "充电": { normal: "images/240px-Charge_battery.webp", upgraded: "images/240px-Charge_battery_upgrade.webp" },
    "飞跃": { normal: "images/240px-Leap.webp", upgraded: "images/240px-Leap_upgrade.webp" },
    "冷静头脑": { normal: "images/240px-Coolheaded.webp", upgraded: "images/240px-Coolheaded_upgrade.webp" },
    "全息影像": { normal: "images/240px-Hologram.webp", upgraded: "images/240px-Hologram_upgrade.webp" },
    "引雷针": { normal: "images/240px-Lightning_rod.webp", upgraded: "images/240px-Lightning_rod_upgrade.webp" },
    "暴风雨": { normal: "images/240px-Tempest.webp", upgraded: "images/240px-Tempest_upgrade.webp" },
    "冰寒": { normal: "images/240px-Chill.webp", upgraded: "images/240px-Chill_upgrade.webp" },
    "超频": { normal: "images/240px-Overclock.webp", upgraded: "images/240px-Overclock_upgrade.webp" },
    "启动流程": { normal: "images/240px-Boot_sequence.webp", upgraded: "images/240px-Boot_sequence_upgrade.webp" },
    "白噪声": { normal: "images/240px-White_noise.webp", upgraded: "images/240px-White_noise_upgrade.webp" },
    "玻璃工艺": { normal: "images/240px-Glasswork.webp", upgraded: "images/240px-Glasswork_upgrade.webp" },
    "混沌": { normal: "images/240px-Chaos.webp", upgraded: "images/240px-Chaos_upgrade.webp" },
    "快速检索": { normal: "images/240px-Skim.webp", upgraded: "images/240px-Skim_upgrade.webp" },
    "内存清理": { normal: "images/240px-Scavenge.webp", upgraded: "images/240px-Scavenge_upgrade.webp" },
    "能量涌动": { normal: "images/240px-Energy_surge.webp", upgraded: "images/240px-Energy_surge_upgrade.webp" },
    "漆黑": { normal: "images/240px-Darkness.webp", upgraded: "images/240px-Darkness_upgrade.webp" },
    "强撑": { normal: "images/240px-Fight_through.webp", upgraded: "images/240px-Fight_through_upgrade.webp" },
    "双倍能量": { normal: "images/240px-Double_energy.webp", upgraded: "images/240px-Double_energy_upgrade.webp" },
    "同步": { normal: "images/240px-Synchronize.webp", upgraded: "images/240px-Synchronize_upgrade.webp" },
    "压缩": { normal: "images/240px-Compact.webp", upgraded: "images/240px-Compact_upgrade.webp" },
    "暗影之盾": { normal: "images/240px-Shadow_shield.webp", upgraded: "images/240px-Shadow_shield_upgrade.webp" },
    "冰川": { normal: "images/240px-Glacier.webp", upgraded: "images/240px-Glacier_upgrade.webp" },
    "聚变": { normal: "images/240px-Fusion.webp", upgraded: "images/240px-Fusion_upgrade.webp" },
    "超临界态": { normal: "images/240px-Supercritical.webp", upgraded: "images/240px-Supercritical_upgrade.webp" },
    "多重释放": { normal: "images/240px-Multi_cast.webp", upgraded: "images/240px-Multi_cast_upgrade.webp" },
    "模组改造": { normal: "images/240px-Modded.webp", upgraded: "images/240px-Modded_upgrade.webp" },
    "重启": { normal: "images/240px-Reboot.webp", upgraded: "images/240px-Reboot_upgrade.webp" },
    "信号增强": { normal: "images/240px-Signal_boost.webp", upgraded: "images/240px-Signal_boost_upgrade.webp" },
    "遗传算法": { normal: "images/240px-Genetic_algorithm.webp", upgraded: "images/240px-Genetic_algorithm_upgrade.webp" },
    "引火": { normal: "images/240px-Ignition.webp", upgraded: "images/240px-Ignition_upgrade.webp" },
    "彩虹": { normal: "images/240px-Rainbow.webp", upgraded: "images/240px-Rainbow_upgrade.webp" },
    "电流相生": { normal: "images/240px-Voltaic.webp", upgraded: "images/240px-Voltaic_upgrade.webp" },
    "四重释放": { normal: "images/240px-Quadcast.webp", upgraded: "images/240px-Quadcast_upgrade.webp" },
    "冰雹风暴": { normal: "images/240px-Hailstorm.webp", upgraded: "images/240px-Hailstorm_upgrade.webp" },
    "迭代": { normal: "images/240px-Iteration.webp", upgraded: "images/240px-Iteration_upgrade.webp" },
    "扩容": { normal: "images/240px-Capacitor.webp", upgraded: "images/240px-Capacitor_upgrade.webp" },
    "雷暴": { normal: "images/240px-Storm.webp", upgraded: "images/240px-Storm_upgrade.webp" },
    "雷霆": { normal: "images/240px-Thunder.webp", upgraded: "images/240px-Thunder_upgrade.webp" },
    "循环": { normal: "images/240px-Loop.webp", upgraded: "images/240px-Loop_upgrade.webp" },
    "烟囱": { normal: "images/240px-Smokestack.webp", upgraded: "images/240px-Smokestack_upgrade.webp" },
    "子程序": { normal: "images/240px-Subroutine.webp", upgraded: "images/240px-Subroutine_upgrade.webp" },
    "暴涨": { normal: "images/240px-Bulk_up.webp", upgraded: "images/240px-Bulk_up_upgrade.webp" },
    "野性": { normal: "images/240px-Feral.webp", upgraded: "images/240px-Feral_upgrade.webp" },
    "化废为宝": { normal: "images/240px-Trash_to_treasure.webp", upgraded: "images/240px-Trash_to_treasure_upgrade.webp" },
    "机器学习": { normal: "images/240px-Machine_learning.webp", upgraded: "images/240px-Machine_learning_upgrade.webp" },
    "冷却剂": { normal: "images/240px-Coolant.webp", upgraded: "images/240px-Coolant_upgrade.webp" },
    "碎片整理": { normal: "images/240px-Defragment.webp", upgraded: "images/240px-Defragment_upgrade.webp" },
    "旋转工艺": { normal: "images/240px-Spinner.webp", upgraded: "images/240px-Spinner_upgrade.webp" },
    "缓冲": { normal: "images/240px-Buffer.webp", upgraded: "images/240px-Buffer_upgrade.webp" },
    "吞噬暗影": { normal: "images/240px-Consuming_shadow.webp", upgraded: "images/240px-Consuming_shadow_upgrade.webp" },
    "创造性AI": { normal: "images/240px-Creative_ai.webp", upgraded: "images/240px-Creative_ai_upgrade.webp" },
    "回响形态": { normal: "images/240px-Echo_form.webp", upgraded: "images/240px-Echo_form_upgrade.webp" },
    "偏差认知": { normal: "images/240px-Biased_cognition.webp", upgraded: "images/240px-Biased_cognition_upgrade.webp" }
};

function getCardImage(cardName) { return knownImages[cardName] ? knownImages[cardName].normal : ""; }
function getCardUpgradedImage(cardName) { return knownImages[cardName] ? knownImages[cardName].upgraded : ""; }
function getCardCssBg(type) { return typeConfig[type] ? typeConfig[type].cssBg : ""; }

// ===== 全部80张卡牌数据 =====
const cardsDatabase = [
    // ==================== 攻击牌 (28张) ====================
    {
        id: "defect_strike", name: "打击", class: "defect", rarity: "basic", cost: 1, type: "attack",
        description: "造成6点伤害。", image: getCardImage("打击"), upgradedImage: getCardUpgradedImage("打击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 46.2 }, upgraded: { winRate: 49.5 } }, synergies: []
    },
    {
        id: "defect_beam_cell", name: "光束射线", class: "defect", rarity: "common", cost: 0, type: "attack",
        description: "造成3点伤害。给予1层易伤。", image: getCardImage("光束射线"), upgradedImage: getCardUpgradedImage("光束射线"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 54.5 }, upgraded: { winRate: 58.2 } },
        synergies: [
            { cardId: "defect_all_for_one", winRate: 78 }, { cardId: "defect_claw", winRate: 75 },
            { cardId: "defect_scrape", winRate: 72 }, { cardId: "defect_spiral_drill", winRate: 70 },
            { cardId: "defect_hologram", winRate: 68 }, { cardId: "defect_go_for_the_eyes", winRate: 65 },
            { cardId: "defect_barrage", winRate: 65 }, { cardId: "defect_ball_lightning", winRate: 63 }
        ]
    },
    {
        id: "defect_go_for_the_eyes", name: "眼部攻击", class: "defect", rarity: "common", cost: 0, type: "attack",
        description: "造成3点伤害。如果敌人有攻击意图，给予1层虚弱。", image: getCardImage("眼部攻击"), upgradedImage: getCardUpgradedImage("眼部攻击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 55.2 }, upgraded: { winRate: 59.8 } },
        synergies: [
            { cardId: "defect_all_for_one", winRate: 78 }, { cardId: "defect_claw", winRate: 75 },
            { cardId: "defect_scrape", winRate: 72 }, { cardId: "defect_beam_cell", winRate: 70 },
            { cardId: "defect_hologram", winRate: 68 }, { cardId: "defect_glacier", winRate: 60 }
        ]
    },
    {
        id: "defect_claw", name: "爪击", class: "defect", rarity: "common", cost: 0, type: "attack",
        description: "造成3点伤害。本场战斗所有爪击伤害+2。", image: getCardImage("爪击"), upgradedImage: getCardUpgradedImage("爪击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 58.5 }, upgraded: { winRate: 63.2 } },
        synergies: [
            { cardId: "defect_claw", winRate: 90, note: "双爪击", selfCount: 2 },
            { cardId: "defect_claw", winRate: 94, note: "三爪击", selfCount: 3 },
            { cardId: "defect_all_for_one", winRate: 88 }, { cardId: "defect_scrape", winRate: 80 },
            { cardId: "defect_hologram", winRate: 78 }, { cardId: "defect_beam_cell", winRate: 75 },
            { cardId: "defect_go_for_the_eyes", winRate: 72 }, { cardId: "defect_reboot", winRate: 68 },
            { cardId: "defect_feral", winRate: 62 }
        ]
    },
    {
        id: "defect_compile_driver", name: "编译冲击", class: "defect", rarity: "common", cost: 1, type: "attack",
        description: "造成7点伤害。你每有一种不同的充能球，就抽一张牌。", image: getCardImage("编译冲击"), upgradedImage: getCardUpgradedImage("编译冲击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 56.8 }, upgraded: { winRate: 62.3 } },
        synergies: [
            { cardId: "defect_rainbow", winRate: 82 }, { cardId: "defect_chaos", winRate: 75 },
            { cardId: "defect_darkness", winRate: 72 }, { cardId: "defect_glacier", winRate: 70 },
            { cardId: "defect_ball_lightning", winRate: 68 }, { cardId: "defect_fusion", winRate: 68 },
            { cardId: "defect_capacitor", winRate: 65 }
        ]
    },
    {
        id: "defect_follow_up", name: "趁势打击", class: "defect", rarity: "common", cost: 1, type: "attack",
        description: "造成10点伤害。这张牌的耗能降为0。", image: getCardImage("趁势打击"), upgradedImage: getCardUpgradedImage("趁势打击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 55.8 }, upgraded: { winRate: 60.5 } },
        synergies: [
            { cardId: "defect_all_for_one", winRate: 78 }, { cardId: "defect_claw", winRate: 72 },
            { cardId: "defect_scrape", winRate: 70 }, { cardId: "defect_hologram", winRate: 68 },
            { cardId: "defect_beam_cell", winRate: 63 }, { cardId: "defect_reboot", winRate: 60 }
        ]
    },
    {
        id: "defect_barrage", name: "弹幕齐射", class: "defect", rarity: "common", cost: 1, type: "attack",
        description: "当前每有一个充能球，造成5点伤害。", image: getCardImage("弹幕齐射"), upgradedImage: getCardUpgradedImage("弹幕齐射"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 57.2 }, upgraded: { winRate: 62.8 } },
        synergies: [
            { cardId: "defect_capacitor", winRate: 78 }, { cardId: "defect_tempest", winRate: 76 },
            { cardId: "defect_glacier", winRate: 75 }, { cardId: "defect_rainbow", winRate: 72 },
            { cardId: "defect_chaos", winRate: 68 }, { cardId: "defect_lightning_rod", winRate: 65 },
            { cardId: "defect_beam_cell", winRate: 60 }
        ]
    },
    {
        id: "defect_cold_snap", name: "寒流", class: "defect", rarity: "common", cost: 1, type: "attack",
        description: "造成6点伤害。生成1个冰霜充能球。", image: getCardImage("寒流"), upgradedImage: getCardUpgradedImage("寒流"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 58.5 }, upgraded: { winRate: 63.2 } },
        synergies: [
            { cardId: "defect_glacier", winRate: 78 }, { cardId: "defect_defragment", winRate: 75 },
            { cardId: "defect_capacitor", winRate: 72 }, { cardId: "defect_blizzard", winRate: 70 },
            { cardId: "defect_barrage", winRate: 68 }, { cardId: "defect_coolheaded", winRate: 68 },
            { cardId: "defect_hailstorm", winRate: 65 }, { cardId: "defect_compile_driver", winRate: 65 }
        ]
    },
    {
        id: "defect_focus_strike", name: "集中打击", class: "defect", rarity: "common", cost: 1, type: "attack",
        description: "造成9点伤害。在本回合获得1点集中。", image: getCardImage("集中打击"), upgradedImage: getCardUpgradedImage("集中打击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 54.2 }, upgraded: { winRate: 59.5 } },
        synergies: [
            { cardId: "defect_glacier", winRate: 78 }, { cardId: "defect_defragment", winRate: 76 },
            { cardId: "defect_ball_lightning", winRate: 74 }, { cardId: "defect_cold_snap", winRate: 72 },
            { cardId: "defect_tempest", winRate: 68 }, { cardId: "defect_darkness", winRate: 63 }
        ]
    },
    {
        id: "defect_ball_lightning", name: "球状闪电", class: "defect", rarity: "common", cost: 1, type: "attack",
        description: "造成7点伤害。生成1个闪电充能球。", image: getCardImage("球状闪电"), upgradedImage: getCardUpgradedImage("球状闪电"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 61.2 }, upgraded: { winRate: 65.8 } },
        synergies: [
            { cardId: "defect_tesla_coil", winRate: 75 }, { cardId: "defect_tempest", winRate: 76 },
            { cardId: "defect_defragment", winRate: 74 }, { cardId: "defect_focus_strike", winRate: 72 },
            { cardId: "defect_capacitor", winRate: 68 }, { cardId: "defect_barrage", winRate: 66 },
            { cardId: "defect_thunder", winRate: 65 }
        ]
    },
    {
        id: "defect_sweeping_beam", name: "扫荡射线", class: "defect", rarity: "common", cost: 1, type: "attack",
        description: "对所有敌人造成6点伤害。抽1张牌。", image: getCardImage("扫荡射线"), upgradedImage: getCardUpgradedImage("扫荡射线"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 55.8 }, upgraded: { winRate: 60.2 } },
        synergies: [
            { cardId: "defect_hyperbeam", winRate: 62 }, { cardId: "defect_ball_lightning", winRate: 65 },
            { cardId: "defect_defragment", winRate: 68 }, { cardId: "defect_sunder", winRate: 58 },
            { cardId: "defect_beam_cell", winRate: 60 }
        ]
    },
    {
        id: "defect_corrupt_attack", name: "污秽攻击", class: "defect", rarity: "common", cost: 1, type: "attack",
        description: "造成4点伤害3次。在弃牌堆加入1张黏液。", image: getCardImage("污秽攻击"), upgradedImage: getCardUpgradedImage("污秽攻击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 50.5 }, upgraded: { winRate: 55.2 } },
        synergies: [
            { cardId: "defect_compact", winRate: 85 }, { cardId: "defect_smokestack", winRate: 83 },
            { cardId: "defect_waste_to_wealth", winRate: 80 }, { cardId: "defect_flak_cannon", winRate: 78 },
            { cardId: "defect_iterate", winRate: 76 }, { cardId: "defect_rocket_punch", winRate: 72 },
            { cardId: "defect_recycle", winRate: 68 }
        ]
    },
    {
        id: "defect_riot", name: "骚动", class: "defect", rarity: "common", cost: 2, type: "attack",
        description: "造成5点伤害两次。随机打出抽牌堆1张攻击牌。", image: getCardImage("骚动"), upgradedImage: getCardUpgradedImage("骚动"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 48.5 }, upgraded: { winRate: 53.2 } },
        synergies: [
            { cardId: "defect_sunder", winRate: 78 }, { cardId: "defect_rocket_punch", winRate: 75 },
            { cardId: "defect_meteor_strike", winRate: 72 }, { cardId: "defect_hyperbeam", winRate: 70 },
            { cardId: "defect_all_for_one", winRate: 65 }, { cardId: "defect_beam_cell", winRate: 63 }
        ]
    },
    {
        id: "defect_ftl", name: "超越光速", class: "defect", rarity: "uncommon", cost: 0, type: "attack",
        description: "造成5点伤害。如果你这回合打出牌数小于3张，抽1张牌。", image: getCardImage("超越光速"), upgradedImage: getCardUpgradedImage("超越光速"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 56.8 }, upgraded: { winRate: 61.5 } },
        synergies: [
            { cardId: "defect_all_for_one", winRate: 72 }, { cardId: "defect_sunder", winRate: 68 },
            { cardId: "defect_meteor_strike", winRate: 65 }, { cardId: "defect_rocket_punch", winRate: 62 },
            { cardId: "defect_beam_cell", winRate: 58 }
        ]
    },
    {
        id: "defect_tesla_coil", name: "特斯拉线圈", class: "defect", rarity: "uncommon", cost: 0, type: "attack",
        description: "造成3点伤害。触发所有闪电充能球的被动。", image: getCardImage("特斯拉线圈"), upgradedImage: getCardUpgradedImage("特斯拉线圈"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 59.2 }, upgraded: { winRate: 63.8 } },
        synergies: [
            { cardId: "defect_tempest", winRate: 78 }, { cardId: "defect_ball_lightning", winRate: 75 },
            { cardId: "defect_thunder", winRate: 72 }, { cardId: "defect_lightning_rod", winRate: 70 },
            { cardId: "defect_defragment", winRate: 68 }, { cardId: "defect_capacitor", winRate: 63 },
            { cardId: "defect_storm", winRate: 62 }, { cardId: "defect_zap", winRate: 60 }
        ]
    },
    {
        id: "defect_scrape", name: "刮削", class: "defect", rarity: "uncommon", cost: 1, type: "attack",
        description: "造成7点伤害。抽4张牌。丢弃抽到的牌中耗能不为0的牌。", image: getCardImage("刮削"), upgradedImage: getCardUpgradedImage("刮削"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 55.2 }, upgraded: { winRate: 60.8 } },
        synergies: [
            { cardId: "defect_claw", winRate: 78 }, { cardId: "defect_all_for_one", winRate: 76 },
            { cardId: "defect_beam_cell", winRate: 74 }, { cardId: "defect_go_for_the_eyes", winRate: 72 },
            { cardId: "defect_follow_up", winRate: 65 }, { cardId: "defect_hologram", winRate: 63 },
            { cardId: "defect_reboot", winRate: 60 }
        ]
    },
    {
        id: "defect_rocket_punch", name: "火箭飞拳", class: "defect", rarity: "uncommon", cost: 2, type: "attack",
        description: "造成13点伤害。抽1张牌。生成状态牌时耗能降为0。", image: getCardImage("火箭飞拳"), upgradedImage: getCardUpgradedImage("火箭飞拳"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 60.5 }, upgraded: { winRate: 65.2 } },
        synergies: [
            { cardId: "defect_corrupt_attack", winRate: 78 }, { cardId: "defect_core_accel", winRate: 75 },
            { cardId: "defect_overclock", winRate: 72 }, { cardId: "defect_brace", winRate: 70 },
            { cardId: "defect_all_for_one", winRate: 65 }, { cardId: "defect_scrape", winRate: 63 },
            { cardId: "defect_beam_cell", winRate: 60 }
        ]
    },
    {
        id: "defect_null", name: "空值", class: "defect", rarity: "uncommon", cost: 2, type: "attack",
        description: "造成10点伤害。给予2层虚弱。生成1个黑暗充能球。", image: getCardImage("空值"), upgradedImage: getCardUpgradedImage("空值"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 52.5 }, upgraded: { winRate: 57.2 } },
        synergies: [
            { cardId: "defect_darkness", winRate: 78 }, { cardId: "defect_multicast", winRate: 75 },
            { cardId: "defect_dualcast", winRate: 72 }, { cardId: "defect_quad_release", winRate: 62 },
            { cardId: "defect_defragment", winRate: 63 }, { cardId: "defect_beam_cell", winRate: 58 }
        ]
    },
    {
        id: "defect_synthesis", name: "人工合成", class: "defect", rarity: "uncommon", cost: 2, type: "attack",
        description: "造成12点伤害。你打出的下一张能力牌耗能变为0。", image: getCardImage("人工合成"), upgradedImage: getCardUpgradedImage("人工合成"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 55.8 }, upgraded: { winRate: 60.5 } },
        synergies: [
            { cardId: "defect_echo_form", winRate: 82 }, { cardId: "defect_creative_ai", winRate: 80 },
            { cardId: "defect_biased_cognition", winRate: 76 }, { cardId: "defect_defragment", winRate: 74 },
            { cardId: "defect_buffer", winRate: 72 }, { cardId: "defect_capacitor", winRate: 70 },
            { cardId: "defect_meteor_strike", winRate: 68 }
        ]
    },
    {
        id: "defect_sunder", name: "分离", class: "defect", rarity: "uncommon", cost: 3, type: "attack",
        description: "造成24点伤害。如果击杀了敌人则获得能量。", image: getCardImage("分离"), upgradedImage: getCardUpgradedImage("分离"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_beam_cell", winRate: 72 }, { cardId: "defect_double_energy", winRate: 70 },
            { cardId: "defect_core_accel", winRate: 68 }, { cardId: "defect_riot", winRate: 65 },
            { cardId: "defect_synthesis", winRate: 63 }, { cardId: "defect_fusion", winRate: 58 }
        ]
    },
    {
        id: "defect_refract", name: "折射", class: "defect", rarity: "uncommon", cost: 3, type: "attack",
        description: "造成9点伤害两次。生成2个玻璃充能球。", image: getCardImage("折射"), upgradedImage: getCardUpgradedImage("折射"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 57.2 }, upgraded: { winRate: 62.5 } },
        synergies: [
            { cardId: "defect_spin_craft", winRate: 80 }, { cardId: "defect_defragment", winRate: 75 },
            { cardId: "defect_shatter", winRate: 72 }, { cardId: "defect_glass_craft", winRate: 70 },
            { cardId: "defect_capacitor", winRate: 65 }, { cardId: "defect_beam_cell", winRate: 63 }
        ]
    },
    {
        id: "defect_spiral_drill", name: "螺旋钻击", class: "defect", rarity: "rare", cost: 0, type: "attack",
        description: "本回合中每使用1点能量，此牌造成3点伤害一次。", image: getCardImage("螺旋钻击"), upgradedImage: getCardUpgradedImage("螺旋钻击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 63.5 }, upgraded: { winRate: 68.2 } },
        synergies: [
            { cardId: "defect_double_energy", winRate: 85 }, { cardId: "defect_core_accel", winRate: 82 },
            { cardId: "defect_supercritical", winRate: 80 }, { cardId: "defect_meteor_strike", winRate: 78 },
            { cardId: "defect_fusion", winRate: 75 }, { cardId: "defect_aggregate", winRate: 72 },
            { cardId: "defect_multicast", winRate: 68 }, { cardId: "defect_beam_cell", winRate: 60 }
        ]
    },
    {
        id: "defect_shatter", name: "打碎", class: "defect", rarity: "rare", cost: 1, type: "attack",
        description: "对所有敌人造成7点伤害。激发所有充能球。", image: getCardImage("打碎"), upgradedImage: getCardUpgradedImage("打碎"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 58.2 }, upgraded: { winRate: 63.5 } },
        synergies: [
            { cardId: "defect_darkness", winRate: 82 }, { cardId: "defect_tempest", winRate: 78 },
            { cardId: "defect_glacier", winRate: 75 }, { cardId: "defect_rainbow", winRate: 74 },
            { cardId: "defect_capacitor", winRate: 72 }, { cardId: "defect_defragment", winRate: 70 },
            { cardId: "defect_beam_cell", winRate: 62 }
        ]
    },
    {
        id: "defect_hyperbeam", name: "超能光束", class: "defect", rarity: "rare", cost: 2, type: "attack",
        description: "对所有敌人造成26点伤害。失去3点集中。", image: getCardImage("超能光束"), upgradedImage: getCardUpgradedImage("超能光束"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 58.5 }, upgraded: { winRate: 63.2 } },
        synergies: [
            { cardId: "defect_biased_cognition", winRate: 78 }, { cardId: "defect_fusion", winRate: 75 },
            { cardId: "defect_meteor_strike", winRate: 72 }, { cardId: "defect_core_accel", winRate: 68 },
            { cardId: "defect_defragment", winRate: 63 }, { cardId: "defect_synthesis", winRate: 65 }
        ]
    },
    {
        id: "defect_flak_cannon", name: "散射炮", class: "defect", rarity: "rare", cost: 2, type: "attack",
        description: "消耗所有状态牌。每张造成8点伤害随机分配。", image: getCardImage("散射炮"), upgradedImage: getCardUpgradedImage("散射炮"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_corrupt_attack", winRate: 80 }, { cardId: "defect_core_accel", winRate: 78 },
            { cardId: "defect_overclock", winRate: 75 }, { cardId: "defect_brace", winRate: 74 },
            { cardId: "defect_compact", winRate: 72 }, { cardId: "defect_smokestack", winRate: 70 },
            { cardId: "defect_waste_to_wealth", winRate: 68 }
        ]
    },
    {
        id: "defect_adaptive_strike", name: "适应打击", class: "defect", rarity: "rare", cost: 2, type: "attack",
        description: "造成18点伤害。弃牌堆添加1张0费复制品。", image: getCardImage("适应打击"), upgradedImage: getCardUpgradedImage("适应打击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 60.2 }, upgraded: { winRate: 65.5 } },
        synergies: [
            { cardId: "defect_all_for_one", winRate: 82 }, { cardId: "defect_scrape", winRate: 78 },
            { cardId: "defect_hologram", winRate: 75 }, { cardId: "defect_reboot", winRate: 72 },
            { cardId: "defect_claw", winRate: 68 }, { cardId: "defect_beam_cell", winRate: 63 }
        ]
    },
    {
        id: "defect_all_for_one", name: "万物一心", class: "defect", rarity: "rare", cost: 2, type: "attack",
        description: "造成10点伤害。弃牌堆所有0费牌放入手牌。", image: getCardImage("万物一心"), upgradedImage: getCardUpgradedImage("万物一心"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 65.2 }, upgraded: { winRate: 70.8 } },
        synergies: [
            { cardId: "defect_claw", winRate: 88 }, { cardId: "defect_adaptive_strike", winRate: 82 },
            { cardId: "defect_scrape", winRate: 80 }, { cardId: "defect_beam_cell", winRate: 78 },
            { cardId: "defect_go_for_the_eyes", winRate: 76 }, { cardId: "defect_spiral_drill", winRate: 75 },
            { cardId: "defect_follow_up", winRate: 74 }, { cardId: "defect_hologram", winRate: 73 }
        ]
    },
    {
        id: "defect_ice_lance", name: "冰之长枪", class: "defect", rarity: "rare", cost: 3, type: "attack",
        description: "造成19点伤害。生成3个冰霜充能球。", image: getCardImage("冰之长枪"), upgradedImage: getCardUpgradedImage("冰之长枪"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 62.8 }, upgraded: { winRate: 68.5 } },
        synergies: [
            { cardId: "defect_glacier", winRate: 80 }, { cardId: "defect_defragment", winRate: 78 },
            { cardId: "defect_capacitor", winRate: 76 }, { cardId: "defect_blizzard", winRate: 74 },
            { cardId: "defect_cold_snap", winRate: 72 }, { cardId: "defect_barrage", winRate: 68 },
            { cardId: "defect_synthesis", winRate: 63 }
        ]
    },
    {
        id: "defect_meteor_strike", name: "陨石打击", class: "defect", rarity: "rare", cost: 5, type: "attack",
        description: "造成24点伤害。生成3个等离子充能球。", image: getCardImage("陨石打击"), upgradedImage: getCardUpgradedImage("陨石打击"), cssBg: getCardCssBg("attack"),
        stats: { normal: { winRate: 58.5 }, upgraded: { winRate: 63.2 } },
        synergies: [
            { cardId: "defect_synthesis", winRate: 82 }, { cardId: "defect_double_energy", winRate: 78 },
            { cardId: "defect_core_accel", winRate: 76 }, { cardId: "defect_spiral_drill", winRate: 75 },
            { cardId: "defect_fusion", winRate: 74 }, { cardId: "defect_supercritical", winRate: 70 },
            { cardId: "defect_multicast", winRate: 63 }
        ]
    },
        // ==================== 技能牌 (31张) ====================
    {
        id: "defect_zap", name: "电击", class: "defect", rarity: "basic", cost: 1, type: "skill",
        description: "生成1个闪电充能球。", image: getCardImage("电击"), upgradedImage: getCardUpgradedImage("电击"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 49.8 }, upgraded: { winRate: 54.2 } },
        synergies: [
            { cardId: "defect_tesla_coil", winRate: 72 }, { cardId: "defect_tempest", winRate: 68 },
            { cardId: "defect_barrage", winRate: 65 }, { cardId: "defect_defragment", winRate: 63 },
            { cardId: "defect_thunder", winRate: 62 }, { cardId: "defect_all_for_one", winRate: 55 }
        ]
    },
    {
        id: "defect_defend", name: "防御", class: "defect", rarity: "basic", cost: 1, type: "skill",
        description: "获得5点格挡。", image: getCardImage("防御"), upgradedImage: getCardUpgradedImage("防御"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 48.5 }, upgraded: { winRate: 50.8 } }, synergies: []
    },
    {
        id: "defect_dualcast", name: "双重释放", class: "defect", rarity: "basic", cost: 1, type: "skill",
        description: "激发你最右侧的充能球两次。", image: getCardImage("双重释放"), upgradedImage: getCardUpgradedImage("双重释放"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 52.3 }, upgraded: { winRate: 56.8 } },
        synergies: [
            { cardId: "defect_darkness", winRate: 78 }, { cardId: "defect_multicast", winRate: 75 },
            { cardId: "defect_quad_release", winRate: 73 }, { cardId: "defect_fusion", winRate: 72 },
            { cardId: "defect_glacier", winRate: 65 }, { cardId: "defect_all_for_one", winRate: 58 }
        ]
    },
    {
        id: "defect_quick_escape", name: "高速脱离", class: "defect", rarity: "common", cost: 0, type: "skill",
        description: "获得6点格挡。弃牌堆加入1张晕眩。", image: getCardImage("高速脱离"), upgradedImage: getCardUpgradedImage("高速脱离"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 55.2 }, upgraded: { winRate: 59.8 } },
        synergies: [
            { cardId: "defect_compact", winRate: 78 }, { cardId: "defect_flak_cannon", winRate: 74 },
            { cardId: "defect_smokestack", winRate: 72 }, { cardId: "defect_waste_to_wealth", winRate: 70 },
            { cardId: "defect_iterate", winRate: 68 }, { cardId: "defect_rocket_punch", winRate: 66 }
        ]
    },
    {
        id: "defect_core_accel", name: "内核加速", class: "defect", rarity: "common", cost: 0, type: "skill",
        description: "获得2费。弃牌堆加入1张虚空。", image: getCardImage("内核加速"), upgradedImage: getCardUpgradedImage("内核加速"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 56.5 }, upgraded: { winRate: 61.2 } },
        synergies: [
            { cardId: "defect_spiral_drill", winRate: 82 }, { cardId: "defect_meteor_strike", winRate: 78 },
            { cardId: "defect_sunder", winRate: 76 }, { cardId: "defect_compact", winRate: 83 },
            { cardId: "defect_flak_cannon", winRate: 78 }, { cardId: "defect_waste_to_wealth", winRate: 75 },
            { cardId: "defect_double_energy", winRate: 74 }, { cardId: "defect_supercritical", winRate: 72 }
        ]
    },
    {
        id: "defect_hotfix", name: "热修复", class: "defect", rarity: "common", cost: 0, type: "skill",
        description: "本回合获得2点集中。消耗。", image: getCardImage("热修复"), upgradedImage: getCardUpgradedImage("热修复"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 58.2 }, upgraded: { winRate: 63.5 } },
        synergies: [
            { cardId: "defect_glacier", winRate: 78 }, { cardId: "defect_ball_lightning", winRate: 76 },
            { cardId: "defect_tempest", winRate: 74 }, { cardId: "defect_defragment", winRate: 68 },
            { cardId: "defect_darkness", winRate: 70 }, { cardId: "defect_biased_cognition", winRate: 63 }
        ]
    },
    {
        id: "defect_charge", name: "充电", class: "defect", rarity: "common", cost: 1, type: "skill",
        description: "获得7点格挡。下回合获得1费。", image: getCardImage("充电"), upgradedImage: getCardUpgradedImage("充电"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 57.8 }, upgraded: { winRate: 62.5 } },
        synergies: [
            { cardId: "defect_spiral_drill", winRate: 70 }, { cardId: "defect_sunder", winRate: 68 },
            { cardId: "defect_ice_lance", winRate: 65 }, { cardId: "defect_defragment", winRate: 60 },
            { cardId: "defect_glacier", winRate: 62 }
        ]
    },
    {
        id: "defect_leap", name: "飞跃", class: "defect", rarity: "common", cost: 1, type: "skill",
        description: "获得9点格挡。", image: getCardImage("飞跃"), upgradedImage: getCardUpgradedImage("飞跃"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 56.2 }, upgraded: { winRate: 61.5 } },
        synergies: [
            { cardId: "defect_defragment", winRate: 58 }, { cardId: "defect_capacitor", winRate: 55 },
            { cardId: "defect_glacier", winRate: 53 }
        ]
    },
    {
        id: "defect_coolheaded", name: "冷静头脑", class: "defect", rarity: "common", cost: 1, type: "skill",
        description: "生成1个冰霜充能球。抽1张牌。", image: getCardImage("冷静头脑"), upgradedImage: getCardUpgradedImage("冷静头脑"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 62.8 }, upgraded: { winRate: 68.5 } },
        synergies: [
            { cardId: "defect_glacier", winRate: 80 }, { cardId: "defect_defragment", winRate: 78 },
            { cardId: "defect_capacitor", winRate: 75 }, { cardId: "defect_cold_snap", winRate: 72 },
            { cardId: "defect_blizzard", winRate: 68 }, { cardId: "defect_hailstorm", winRate: 65 }
        ]
    },
    {
        id: "defect_hologram", name: "全息影像", class: "defect", rarity: "common", cost: 1, type: "skill",
        description: "获得3点格挡。弃牌堆1张牌放入手牌。消耗。", image: getCardImage("全息影像"), upgradedImage: getCardUpgradedImage("全息影像"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 58.5 }, upgraded: { winRate: 63.2 } },
        synergies: [
            { cardId: "defect_all_for_one", winRate: 80 }, { cardId: "defect_claw", winRate: 78 },
            { cardId: "defect_adaptive_strike", winRate: 76 }, { cardId: "defect_genetic_algorithm", winRate: 82 },
            { cardId: "defect_darkness", winRate: 70 }, { cardId: "defect_spiral_drill", winRate: 74 }
        ]
    },
    {
        id: "defect_lightning_rod", name: "引雷针", class: "defect", rarity: "common", cost: 1, type: "skill",
        description: "获得4点格挡。下2回合各生成1个闪电充能球。", image: getCardImage("引雷针"), upgradedImage: getCardUpgradedImage("引雷针"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 55.8 }, upgraded: { winRate: 60.5 } },
        synergies: [
            { cardId: "defect_tesla_coil", winRate: 75 }, { cardId: "defect_defragment", winRate: 73 },
            { cardId: "defect_capacitor", winRate: 70 }, { cardId: "defect_thunder", winRate: 68 },
            { cardId: "defect_tempest", winRate: 66 }, { cardId: "defect_barrage", winRate: 65 }
        ]
    },
    {
        id: "defect_tempest", name: "暴风雨", class: "defect", rarity: "uncommon", cost: 0, type: "skill",
        description: "消耗所有能量。每点能量生成1个闪电充能球。", image: getCardImage("暴风雨"), upgradedImage: getCardUpgradedImage("暴风雨"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 55.8 }, upgraded: { winRate: 62.5 } },
        synergies: [
            { cardId: "defect_core_accel", winRate: 80 }, { cardId: "defect_double_energy", winRate: 78 },
            { cardId: "defect_meteor_strike", winRate: 76 }, { cardId: "defect_tesla_coil", winRate: 72 },
            { cardId: "defect_defragment", winRate: 73 }, { cardId: "defect_thunder", winRate: 70 },
            { cardId: "defect_capacitor", winRate: 68 }, { cardId: "defect_barrage", winRate: 66 },
            { cardId: "defect_supercritical", winRate: 65 }, { cardId: "defect_voltaic", winRate: 85 }
        ]
    },
    {
        id: "defect_chill", name: "冰寒", class: "defect", rarity: "uncommon", cost: 0, type: "skill",
        description: "当前每有一名敌人，就生成1个冰霜充能球。消耗。", image: getCardImage("冰寒"), upgradedImage: getCardUpgradedImage("冰寒"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 58.2 }, upgraded: { winRate: 62.8 } },
        synergies: [
            { cardId: "defect_glacier", winRate: 78 }, { cardId: "defect_defragment", winRate: 75 },
            { cardId: "defect_capacitor", winRate: 73 }, { cardId: "defect_blizzard", winRate: 72 },
            { cardId: "defect_barrage", winRate: 70 }, { cardId: "defect_hailstorm", winRate: 66 }
        ]
    },
    {
        id: "defect_overclock", name: "超频", class: "defect", rarity: "uncommon", cost: 0, type: "skill",
        description: "抽2张牌。弃牌堆加入1张灼伤。", image: getCardImage("超频"), upgradedImage: getCardUpgradedImage("超频"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 55.2 }, upgraded: { winRate: 60.8 } },
        synergies: [
            { cardId: "defect_compact", winRate: 82 }, { cardId: "defect_flak_cannon", winRate: 78 },
            { cardId: "defect_smokestack", winRate: 75 }, { cardId: "defect_waste_to_wealth", winRate: 73 },
            { cardId: "defect_iterate", winRate: 70 }, { cardId: "defect_rocket_punch", winRate: 68 }
        ]
    },
    {
        id: "defect_boot_sequence", name: "启动流程", class: "defect", rarity: "uncommon", cost: 0, type: "skill",
        description: "固有。获得10点格挡。消耗。", image: getCardImage("启动流程"), upgradedImage: getCardUpgradedImage("启动流程"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 65.2 }, upgraded: { winRate: 70.8 } },
        synergies: [
            { cardId: "defect_defragment", winRate: 75 }, { cardId: "defect_capacitor", winRate: 73 },
            { cardId: "defect_echo_form", winRate: 72 }, { cardId: "defect_biased_cognition", winRate: 70 },
            { cardId: "defect_creative_ai", winRate: 68 }
        ]
    },
    {
        id: "defect_white_noise", name: "白噪声", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "随机能力牌加入手牌。本回合免费打出。消耗。", image: getCardImage("白噪声"), upgradedImage: getCardUpgradedImage("白噪声"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 55.2 }, upgraded: { winRate: 60.8 } },
        synergies: [
            { cardId: "defect_iterate", winRate: 72 }, { cardId: "defect_storm", winRate: 70 },
            { cardId: "defect_defragment", winRate: 65 }, { cardId: "defect_capacitor", winRate: 63 },
            { cardId: "defect_echo_form", winRate: 60 }
        ]
    },
    {
        id: "defect_glass_craft", name: "玻璃工艺", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "获得5点格挡。生成1个玻璃充能球。", image: getCardImage("玻璃工艺"), upgradedImage: getCardUpgradedImage("玻璃工艺"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 56.5 }, upgraded: { winRate: 61.2 } },
        synergies: [
            { cardId: "defect_spin_craft", winRate: 78 }, { cardId: "defect_defragment", winRate: 75 },
            { cardId: "defect_shatter", winRate: 72 }, { cardId: "defect_refract", winRate: 70 },
            { cardId: "defect_capacitor", winRate: 65 }
        ]
    },
    {
        id: "defect_chaos", name: "混沌", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "生成1个随机充能球。", image: getCardImage("混沌"), upgradedImage: getCardUpgradedImage("混沌"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 55.2 }, upgraded: { winRate: 60.5 } },
        synergies: [
            { cardId: "defect_compile_driver", winRate: 75 }, { cardId: "defect_capacitor", winRate: 72 },
            { cardId: "defect_barrage", winRate: 70 }, { cardId: "defect_defragment", winRate: 68 },
            { cardId: "defect_shatter", winRate: 65 }, { cardId: "defect_rainbow", winRate: 63 }
        ]
    },
    {
        id: "defect_skimming", name: "快速检索", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "抽3张牌。", image: getCardImage("快速检索"), upgradedImage: getCardUpgradedImage("快速检索"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 55.2 }, upgraded: { winRate: 60.8 } },
        synergies: [
            { cardId: "defect_claw", winRate: 72 }, { cardId: "defect_all_for_one", winRate: 70 },
            { cardId: "defect_defragment", winRate: 66 }, { cardId: "defect_scrape", winRate: 65 },
            { cardId: "defect_reboot", winRate: 60 }
        ]
    },
    {
        id: "defect_scavenge", name: "内存清理", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "消耗一张牌。下回合获得2费。", image: getCardImage("内存清理"), upgradedImage: getCardUpgradedImage("内存清理"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 53.5 }, upgraded: { winRate: 58.2 } },
        synergies: [
            { cardId: "defect_flak_cannon", winRate: 76 }, { cardId: "defect_compact", winRate: 74 },
            { cardId: "defect_core_accel", winRate: 72 }, { cardId: "defect_spiral_drill", winRate: 65 },
            { cardId: "defect_sunder", winRate: 63 }
        ]
    },
    {
        id: "defect_energy_surge", name: "能量涌动", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "所有玩家获得2费。消耗。", image: getCardImage("能量涌动"), upgradedImage: getCardUpgradedImage("能量涌动"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 56.8 }, upgraded: { winRate: 62.5 } },
        synergies: [
            { cardId: "defect_spiral_drill", winRate: 75 }, { cardId: "defect_tempest", winRate: 72 },
            { cardId: "defect_core_accel", winRate: 70 }, { cardId: "defect_meteor_strike", winRate: 68 },
            { cardId: "defect_sunder", winRate: 66 }
        ]
    },
    {
        id: "defect_darkness", name: "漆黑", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "生成1黑暗充能球。触发所有黑暗充能球被动。", image: getCardImage("漆黑"), upgradedImage: getCardUpgradedImage("漆黑"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 56.5 }, upgraded: { winRate: 62.3 } },
        synergies: [
            { cardId: "defect_multicast", winRate: 82 }, { cardId: "defect_quad_release", winRate: 80 },
            { cardId: "defect_dualcast", winRate: 78 }, { cardId: "defect_shatter", winRate: 76 },
            { cardId: "defect_consuming_shadow", winRate: 75 }, { cardId: "defect_hologram", winRate: 70 },
            { cardId: "defect_loop", winRate: 68 }, { cardId: "defect_defragment", winRate: 65 }
        ]
    },
    {
        id: "defect_brace", name: "强撑", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "获得13点格挡。弃牌堆加入2张伤口。", image: getCardImage("强撑"), upgradedImage: getCardUpgradedImage("强撑"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 60.2 }, upgraded: { winRate: 65.8 } },
        synergies: [
            { cardId: "defect_compact", winRate: 88 }, { cardId: "defect_flak_cannon", winRate: 78 },
            { cardId: "defect_smokestack", winRate: 85 }, { cardId: "defect_waste_to_wealth", winRate: 80 },
            { cardId: "defect_iterate", winRate: 76 }, { cardId: "defect_rocket_punch", winRate: 70 }
        ]
    },
    {
        id: "defect_double_energy", name: "双倍能量", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "将你的能量翻倍。消耗。", image: getCardImage("双倍能量"), upgradedImage: getCardUpgradedImage("双倍能量"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_core_accel", winRate: 82 }, { cardId: "defect_spiral_drill", winRate: 80 },
            { cardId: "defect_tempest", winRate: 78 }, { cardId: "defect_meteor_strike", winRate: 76 },
            { cardId: "defect_supercritical", winRate: 74 }, { cardId: "defect_sunder", winRate: 72 }
        ]
    },
    {
        id: "defect_sync", name: "同步", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "你每有一种不同的充能球，本回合获得2点集中。消耗。", image: getCardImage("同步"), upgradedImage: getCardUpgradedImage("同步"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 55.8 }, upgraded: { winRate: 60.5 } },
        synergies: [
            { cardId: "defect_rainbow", winRate: 82 }, { cardId: "defect_chaos", winRate: 78 },
            { cardId: "defect_compile_driver", winRate: 75 }, { cardId: "defect_glacier", winRate: 73 },
            { cardId: "defect_darkness", winRate: 72 }, { cardId: "defect_fusion", winRate: 68 }
        ]
    },
    {
        id: "defect_compact", name: "压缩", class: "defect", rarity: "uncommon", cost: 1, type: "skill",
        description: "获得6点格挡。手牌中全部状态牌变化为燃料。", image: getCardImage("压缩"), upgradedImage: getCardUpgradedImage("压缩"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 54.2 }, upgraded: { winRate: 59.5 } },
        synergies: [
            { cardId: "defect_brace", winRate: 88 }, { cardId: "defect_corrupt_attack", winRate: 85 },
            { cardId: "defect_core_accel", winRate: 83 }, { cardId: "defect_overclock", winRate: 82 },
            { cardId: "defect_quick_escape", winRate: 78 }, { cardId: "defect_flak_cannon", winRate: 76 },
            { cardId: "defect_smokestack", winRate: 74 }
        ]
    },
    {
        id: "defect_shadow_shield", name: "暗影之盾", class: "defect", rarity: "uncommon", cost: 2, type: "skill",
        description: "获得11点格挡。生成1个黑暗充能球。", image: getCardImage("暗影之盾"), upgradedImage: getCardUpgradedImage("暗影之盾"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 56.5 }, upgraded: { winRate: 61.2 } },
        synergies: [
            { cardId: "defect_darkness", winRate: 78 }, { cardId: "defect_multicast", winRate: 75 },
            { cardId: "defect_dualcast", winRate: 73 }, { cardId: "defect_consuming_shadow", winRate: 72 },
            { cardId: "defect_quad_release", winRate: 70 }, { cardId: "defect_loop", winRate: 65 }
        ]
    },
    {
        id: "defect_glacier", name: "冰川", class: "defect", rarity: "uncommon", cost: 2, type: "skill",
        description: "获得6点格挡。生成2个冰霜充能球。", image: getCardImage("冰川"), upgradedImage: getCardUpgradedImage("冰川"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 72.5 }, upgraded: { winRate: 78.2 } },
        synergies: [
            { cardId: "defect_defragment", winRate: 85 }, { cardId: "defect_capacitor", winRate: 82 },
            { cardId: "defect_coolheaded", winRate: 78 }, { cardId: "defect_cold_snap", winRate: 75 },
            { cardId: "defect_ice_lance", winRate: 73 }, { cardId: "defect_echo_form", winRate: 88 },
            { cardId: "defect_blizzard", winRate: 72 }, { cardId: "defect_hailstorm", winRate: 68 }
        ]
    },
    {
        id: "defect_fusion", name: "聚变", class: "defect", rarity: "uncommon", cost: 2, type: "skill",
        description: "生成1个等离子充能球。", image: getCardImage("聚变"), upgradedImage: getCardUpgradedImage("聚变"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 55.2 }, upgraded: { winRate: 60.8 } },
        synergies: [
            { cardId: "defect_meteor_strike", winRate: 80 }, { cardId: "defect_spiral_drill", winRate: 78 },
            { cardId: "defect_tempest", winRate: 75 }, { cardId: "defect_dualcast", winRate: 73 },
            { cardId: "defect_multicast", winRate: 72 }, { cardId: "defect_quad_release", winRate: 70 }
        ]
    },
    {
        id: "defect_supercritical", name: "超临界态", class: "defect", rarity: "rare", cost: 0, type: "skill",
        description: "获得4费。消耗。", image: getCardImage("超临界态"), upgradedImage: getCardUpgradedImage("超临界态"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 68.5 }, upgraded: { winRate: 73.2 } },
        synergies: [
            { cardId: "defect_spiral_drill", winRate: 85 }, { cardId: "defect_tempest", winRate: 82 },
            { cardId: "defect_multicast", winRate: 78 }, { cardId: "defect_meteor_strike", winRate: 76 },
            { cardId: "defect_sunder", winRate: 74 }, { cardId: "defect_double_energy", winRate: 70 }
        ]
    },
    {
        id: "defect_multicast", name: "多重释放", class: "defect", rarity: "rare", cost: 0, type: "skill",
        description: "激发你最右侧的充能球X次。", image: getCardImage("多重释放"), upgradedImage: getCardUpgradedImage("多重释放"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_darkness", winRate: 85 }, { cardId: "defect_shadow_shield", winRate: 78 },
            { cardId: "defect_fusion", winRate: 73 }, { cardId: "defect_meteor_strike", winRate: 72 },
            { cardId: "defect_glacier", winRate: 68 }, { cardId: "defect_supercritical", winRate: 63 }
        ]
    },
    {
        id: "defect_modded", name: "模组改造", class: "defect", rarity: "rare", cost: 0, type: "skill",
        description: "获得1个充能球栏位。抽1张牌。该牌耗能加1。", image: getCardImage("模组改造"), upgradedImage: getCardUpgradedImage("模组改造"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 65.2 }, upgraded: { winRate: 70.8 } },
        synergies: [
            { cardId: "defect_claw", winRate: 72 }, { cardId: "defect_beam_cell", winRate: 70 },
            { cardId: "defect_capacitor", winRate: 66 }, { cardId: "defect_defragment", winRate: 65 },
            { cardId: "defect_glacier", winRate: 63 }
        ]
    },
    {
        id: "defect_reboot", name: "重启", class: "defect", rarity: "rare", cost: 0, type: "skill",
        description: "洗回弃牌堆所有牌。抽4张牌。消耗。", image: getCardImage("重启"), upgradedImage: getCardUpgradedImage("重启"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 68.5 }, upgraded: { winRate: 73.2 } },
        synergies: [
            { cardId: "defect_claw", winRate: 76 }, { cardId: "defect_all_for_one", winRate: 74 },
            { cardId: "defect_adaptive_strike", winRate: 72 }, { cardId: "defect_follow_up", winRate: 70 },
            { cardId: "defect_darkness", winRate: 66 }, { cardId: "defect_defragment", winRate: 65 }
        ]
    },
    {
        id: "defect_signal_boost", name: "信号增强", class: "defect", rarity: "rare", cost: 1, type: "skill",
        description: "你的下一张能力牌会额外打出一次。消耗。", image: getCardImage("信号增强"), upgradedImage: getCardUpgradedImage("信号增强"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 65.8 }, upgraded: { winRate: 70.5 } },
        synergies: [
            { cardId: "defect_defragment", winRate: 88 }, { cardId: "defect_capacitor", winRate: 86 },
            { cardId: "defect_biased_cognition", winRate: 85 }, { cardId: "defect_echo_form", winRate: 83 },
            { cardId: "defect_buffer", winRate: 80 }, { cardId: "defect_machine_learning", winRate: 78 }
        ]
    },
    {
        id: "defect_genetic_algorithm", name: "遗传算法", class: "defect", rarity: "rare", cost: 1, type: "skill",
        description: "获得1点格挡。每打出一次格挡值永久+3。消耗。", image: getCardImage("遗传算法"), upgradedImage: getCardUpgradedImage("遗传算法"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_hologram", winRate: 82 }, { cardId: "defect_reboot", winRate: 76 },
            { cardId: "defect_echo_form", winRate: 60 }, { cardId: "defect_signal_boost", winRate: 62 }
        ]
    },
    {
        id: "defect_ignite", name: "引火", class: "defect", rarity: "rare", cost: 1, type: "skill",
        description: "使另一名玩家生成等离子充能球。消耗。", image: getCardImage("引火"), upgradedImage: getCardUpgradedImage("引火"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 58.5 }, upgraded: { winRate: 63.2 } },
        synergies: [
            { cardId: "defect_meteor_strike", winRate: 78 }, { cardId: "defect_fusion", winRate: 75 }
        ]
    },
    {
        id: "defect_rainbow", name: "彩虹", class: "defect", rarity: "rare", cost: 2, type: "skill",
        description: "生成1闪电球、1冰霜球、1黑暗球。消耗。", image: getCardImage("彩虹"), upgradedImage: getCardUpgradedImage("彩虹"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_compile_driver", winRate: 82 }, { cardId: "defect_sync", winRate: 80 },
            { cardId: "defect_shatter", winRate: 78 }, { cardId: "defect_capacitor", winRate: 76 },
            { cardId: "defect_defragment", winRate: 75 }, { cardId: "defect_barrage", winRate: 73 },
            { cardId: "defect_echo_form", winRate: 60 }
        ]
    },
    {
        id: "defect_voltaic", name: "电流相生", class: "defect", rarity: "rare", cost: 3, type: "skill",
        description: "生成等量于本场战斗生成过的闪电球数量的闪电球。消耗。", image: getCardImage("电流相生"), upgradedImage: getCardUpgradedImage("电流相生"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 58.2 }, upgraded: { winRate: 63.5 } },
        synergies: [
            { cardId: "defect_tempest", winRate: 85 }, { cardId: "defect_ball_lightning", winRate: 82 },
            { cardId: "defect_lightning_rod", winRate: 78 }, { cardId: "defect_tesla_coil", winRate: 74 },
            { cardId: "defect_thunder", winRate: 72 }, { cardId: "defect_defragment", winRate: 70 },
            { cardId: "defect_capacitor", winRate: 68 }
        ]
    },
    {
        id: "defect_quad_release", name: "四重释放", class: "defect", rarity: "ancient", cost: 1, type: "skill",
        description: "激发你最右侧的充能球4次。", image: getCardImage("四重释放"), upgradedImage: getCardUpgradedImage("四重释放"), cssBg: getCardCssBg("skill"),
        stats: { normal: { winRate: 72.5 }, upgraded: { winRate: 78.2 } },
        synergies: [
            { cardId: "defect_darkness", winRate: 90 }, { cardId: "defect_shadow_shield", winRate: 85 },
            { cardId: "defect_fusion", winRate: 76 }, { cardId: "defect_meteor_strike", winRate: 75 },
            { cardId: "defect_glacier", winRate: 72 }, { cardId: "defect_all_for_one", winRate: 68 }
        ]
    },

    // ==================== 能力牌 (21张) ====================
    {
        id: "defect_hailstorm", name: "冰雹风暴", class: "defect", rarity: "uncommon", cost: 1, type: "power",
        description: "回合结束时有冰霜球→对所有敌人造成6点伤害。", image: getCardImage("冰雹风暴"), upgradedImage: getCardUpgradedImage("冰雹风暴"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 56.5 }, upgraded: { winRate: 61.2 } },
        synergies: [
            { cardId: "defect_glacier", winRate: 80 }, { cardId: "defect_cold_snap", winRate: 78 },
            { cardId: "defect_coolheaded", winRate: 76 }, { cardId: "defect_ice_lance", winRate: 75 },
            { cardId: "defect_chill", winRate: 73 }, { cardId: "defect_capacitor", winRate: 70 },
            { cardId: "defect_defragment", winRate: 68 }
        ]
    },
    {
        id: "defect_iterate", name: "迭代", class: "defect", rarity: "uncommon", cost: 1, type: "power",
        description: "每回合首次抽到状态牌时抽2张牌。", image: getCardImage("迭代"), upgradedImage: getCardUpgradedImage("迭代"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_brace", winRate: 85 }, { cardId: "defect_core_accel", winRate: 83 },
            { cardId: "defect_overclock", winRate: 82 }, { cardId: "defect_corrupt_attack", winRate: 80 },
            { cardId: "defect_quick_escape", winRate: 78 }, { cardId: "defect_compact", winRate: 76 },
            { cardId: "defect_flak_cannon", winRate: 74 }, { cardId: "defect_smokestack", winRate: 72 }
        ]
    },
    {
        id: "defect_capacitor", name: "扩容", class: "defect", rarity: "uncommon", cost: 1, type: "power",
        description: "获得2个充能球栏位。", image: getCardImage("扩容"), upgradedImage: getCardUpgradedImage("扩容"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 68.5 }, upgraded: { winRate: 73.2 } },
        synergies: [
            { cardId: "defect_defragment", winRate: 88 }, { cardId: "defect_glacier", winRate: 85 },
            { cardId: "defect_tempest", winRate: 82 }, { cardId: "defect_rainbow", winRate: 80 },
            { cardId: "defect_darkness", winRate: 78 }, { cardId: "defect_barrage", winRate: 76 },
            { cardId: "defect_echo_form", winRate: 86 }, { cardId: "defect_signal_boost", winRate: 84 }
        ]
    },
    {
        id: "defect_storm", name: "雷暴", class: "defect", rarity: "uncommon", cost: 1, type: "power",
        description: "每当你打出一张能力牌时，生成1个闪电充能球。", image: getCardImage("雷暴"), upgradedImage: getCardUpgradedImage("雷暴"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_defragment", winRate: 80 }, { cardId: "defect_capacitor", winRate: 78 },
            { cardId: "defect_creative_ai", winRate: 76 }, { cardId: "defect_iterate", winRate: 74 },
            { cardId: "defect_tesla_coil", winRate: 73 }, { cardId: "defect_thunder", winRate: 72 },
            { cardId: "defect_machine_learning", winRate: 68 }
        ]
    },
    {
        id: "defect_thunder", name: "雷霆", class: "defect", rarity: "uncommon", cost: 1, type: "power",
        description: "每当你激发闪电充能球时，对被命中的敌人造成6点伤害。", image: getCardImage("雷霆"), upgradedImage: getCardUpgradedImage("雷霆"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 58.5 }, upgraded: { winRate: 63.2 } },
        synergies: [
            { cardId: "defect_tesla_coil", winRate: 82 }, { cardId: "defect_tempest", winRate: 80 },
            { cardId: "defect_shatter", winRate: 78 }, { cardId: "defect_ball_lightning", winRate: 76 },
            { cardId: "defect_voltaic", winRate: 73 }, { cardId: "defect_storm", winRate: 72 },
            { cardId: "defect_defragment", winRate: 65 }
        ]
    },
    {
        id: "defect_loop", name: "循环", class: "defect", rarity: "uncommon", cost: 1, type: "power",
        description: "回合开始时触发最右侧充能球被动。", image: getCardImage("循环"), upgradedImage: getCardUpgradedImage("循环"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_darkness", winRate: 78 }, { cardId: "defect_fusion", winRate: 74 },
            { cardId: "defect_meteor_strike", winRate: 73 }, { cardId: "defect_glacier", winRate: 72 },
            { cardId: "defect_capacitor", winRate: 70 }, { cardId: "defect_defragment", winRate: 68 },
            { cardId: "defect_rainbow", winRate: 66 }
        ]
    },
    {
        id: "defect_smokestack", name: "烟囱", class: "defect", rarity: "uncommon", cost: 1, type: "power",
        description: "每当你生成一张状态牌时，对所有敌人造成5点伤害。", image: getCardImage("烟囱"), upgradedImage: getCardUpgradedImage("烟囱"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 58.2 }, upgraded: { winRate: 63.5 } },
        synergies: [
            { cardId: "defect_brace", winRate: 85 }, { cardId: "defect_corrupt_attack", winRate: 83 },
            { cardId: "defect_core_accel", winRate: 80 }, { cardId: "defect_overclock", winRate: 78 },
            { cardId: "defect_quick_escape", winRate: 75 }, { cardId: "defect_compact", winRate: 73 },
            { cardId: "defect_flak_cannon", winRate: 72 }, { cardId: "defect_iterate", winRate: 70 }
        ]
    },
    {
        id: "defect_subroutine", name: "子程序", class: "defect", rarity: "uncommon", cost: 1, type: "power",
        description: "当你打出一张能力牌时，获得1费。", image: getCardImage("子程序"), upgradedImage: getCardUpgradedImage("子程序"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 55.8 }, upgraded: { winRate: 60.5 } },
        synergies: [
            { cardId: "defect_defragment", winRate: 78 }, { cardId: "defect_capacitor", winRate: 76 },
            { cardId: "defect_storm", winRate: 75 }, { cardId: "defect_creative_ai", winRate: 74 },
            { cardId: "defect_iterate", winRate: 73 }, { cardId: "defect_machine_learning", winRate: 72 },
            { cardId: "defect_echo_form", winRate: 66 }, { cardId: "defect_biased_cognition", winRate: 65 }
        ]
    },
    {
        id: "defect_bulk_up", name: "暴涨", class: "defect", rarity: "uncommon", cost: 2, type: "power",
        description: "失去1个充能球栏位。获得2点力量。获得2点敏捷。", image: getCardImage("暴涨"), upgradedImage: getCardUpgradedImage("暴涨"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 56.2 }, upgraded: { winRate: 61.5 } },
        synergies: [
            { cardId: "defect_spiral_drill", winRate: 78 }, { cardId: "defect_claw", winRate: 75 },
            { cardId: "defect_ball_lightning", winRate: 72 }, { cardId: "defect_cold_snap", winRate: 66 },
            { cardId: "defect_leap", winRate: 65 }, { cardId: "defect_capacitor", winRate: 60 }
        ]
    },
    {
        id: "defect_feral", name: "野性", class: "defect", rarity: "uncommon", cost: 2, type: "power",
        description: "每回合打出的第一张0费攻击牌会放回手牌。", image: getCardImage("野性"), upgradedImage: getCardUpgradedImage("野性"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 56.2 }, upgraded: { winRate: 61.5 } },
        synergies: [
            { cardId: "defect_claw", winRate: 85 }, { cardId: "defect_beam_cell", winRate: 80 },
            { cardId: "defect_go_for_the_eyes", winRate: 78 }, { cardId: "defect_spiral_drill", winRate: 76 },
            { cardId: "defect_follow_up", winRate: 72 }, { cardId: "defect_tesla_coil", winRate: 70 },
            { cardId: "defect_all_for_one", winRate: 68 }
        ]
    },
    {
        id: "defect_waste_to_wealth", name: "化废为宝", class: "defect", rarity: "rare", cost: 1, type: "power",
        description: "每当你生成状态牌时，随机生成一个充能球。", image: getCardImage("化废为宝"), upgradedImage: getCardUpgradedImage("化废为宝"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_brace", winRate: 85 }, { cardId: "defect_corrupt_attack", winRate: 83 },
            { cardId: "defect_core_accel", winRate: 80 }, { cardId: "defect_overclock", winRate: 78 },
            { cardId: "defect_quick_escape", winRate: 75 }, { cardId: "defect_smokestack", winRate: 74 },
            { cardId: "defect_iterate", winRate: 72 }, { cardId: "defect_flak_cannon", winRate: 70 }
        ]
    },
    {
        id: "defect_machine_learning", name: "机器学习", class: "defect", rarity: "rare", cost: 1, type: "power",
        description: "在你的回合开始时，额外抽1张牌。", image: getCardImage("机器学习"), upgradedImage: getCardUpgradedImage("机器学习"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 68.5 }, upgraded: { winRate: 73.2 } },
        synergies: [
            { cardId: "defect_defragment", winRate: 78 }, { cardId: "defect_capacitor", winRate: 76 },
            { cardId: "defect_claw", winRate: 75 }, { cardId: "defect_all_for_one", winRate: 74 },
            { cardId: "defect_echo_form", winRate: 73 }, { cardId: "defect_signal_boost", winRate: 72 },
            { cardId: "defect_creative_ai", winRate: 70 }, { cardId: "defect_storm", winRate: 68 }
        ]
    },
    {
        id: "defect_coolant", name: "冷却剂", class: "defect", rarity: "rare", cost: 1, type: "power",
        description: "回合开始每有一种不同充能球获得2点格挡。", image: getCardImage("冷却剂"), upgradedImage: getCardUpgradedImage("冷却剂"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 65.2 }, upgraded: { winRate: 70.8 } },
        synergies: [
            { cardId: "defect_rainbow", winRate: 82 }, { cardId: "defect_chaos", winRate: 78 },
            { cardId: "defect_compile_driver", winRate: 76 }, { cardId: "defect_fusion", winRate: 74 },
            { cardId: "defect_capacitor", winRate: 72 }, { cardId: "defect_glacier", winRate: 70 },
            { cardId: "defect_defragment", winRate: 68 }
        ]
    },
    {
        id: "defect_defragment", name: "碎片整理", class: "defect", rarity: "rare", cost: 1, type: "power",
        description: "获得1点集中。", image: getCardImage("碎片整理"), upgradedImage: getCardUpgradedImage("碎片整理"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 72.5 }, upgraded: { winRate: 78.2 } },
        synergies: [
            { cardId: "defect_glacier", winRate: 88 }, { cardId: "defect_capacitor", winRate: 86 },
            { cardId: "defect_ball_lightning", winRate: 83 }, { cardId: "defect_cold_snap", winRate: 80 },
            { cardId: "defect_darkness", winRate: 78 }, { cardId: "defect_tempest", winRate: 76 },
            { cardId: "defect_echo_form", winRate: 90 }, { cardId: "defect_signal_boost", winRate: 88 },
            { cardId: "defect_coolant", winRate: 74 }
        ]
    },
    {
        id: "defect_spin_craft", name: "旋转工艺", class: "defect", rarity: "rare", cost: 1, type: "power",
        description: "在你的回合开始时，生成1个玻璃充能球。", image: getCardImage("旋转工艺"), upgradedImage: getCardUpgradedImage("旋转工艺"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 65.8 }, upgraded: { winRate: 70.5 } },
        synergies: [
            { cardId: "defect_refract", winRate: 82 }, { cardId: "defect_glass_craft", winRate: 78 },
            { cardId: "defect_shatter", winRate: 76 }, { cardId: "defect_defragment", winRate: 75 },
            { cardId: "defect_capacitor", winRate: 72 }, { cardId: "defect_consuming_shadow", winRate: 70 },
            { cardId: "defect_barrage", winRate: 68 }
        ]
    },
    {
        id: "defect_buffer", name: "缓冲", class: "defect", rarity: "rare", cost: 2, type: "power",
        description: "阻止下1次你受到的生命值损伤。", image: getCardImage("缓冲"), upgradedImage: getCardUpgradedImage("缓冲"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 68.5 }, upgraded: { winRate: 73.2 } },
        synergies: [
            { cardId: "defect_echo_form", winRate: 82 }, { cardId: "defect_signal_boost", winRate: 80 },
            { cardId: "defect_defragment", winRate: 78 }, { cardId: "defect_biased_cognition", winRate: 76 },
            { cardId: "defect_capacitor", winRate: 72 }, { cardId: "defect_creative_ai", winRate: 70 }
        ]
    },
    {
        id: "defect_consuming_shadow", name: "吞噬暗影", class: "defect", rarity: "rare", cost: 2, type: "power",
        description: "生成2个黑暗充能球。回合结束时激发最左侧充能球。", image: getCardImage("吞噬暗影"), upgradedImage: getCardUpgradedImage("吞噬暗影"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 62.5 }, upgraded: { winRate: 67.8 } },
        synergies: [
            { cardId: "defect_darkness", winRate: 62 }, { cardId: "defect_glass_craft", winRate: 72 },
            { cardId: "defect_refract", winRate: 70 }, { cardId: "defect_capacitor", winRate: 68 },
            { cardId: "defect_spin_craft", winRate: 66 }, { cardId: "defect_shatter", winRate: 68 }
        ]
    },
    {
        id: "defect_creative_ai", name: "创造性AI", class: "defect", rarity: "rare", cost: 3, type: "power",
        description: "在你的回合开始时，将一张随机能力牌加入手牌。", image: getCardImage("创造性AI"), upgradedImage: getCardUpgradedImage("创造性AI"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 65.2 }, upgraded: { winRate: 70.8 } },
        synergies: [
            { cardId: "defect_storm", winRate: 82 }, { cardId: "defect_iterate", winRate: 80 },
            { cardId: "defect_subroutine", winRate: 78 }, { cardId: "defect_defragment", winRate: 76 },
            { cardId: "defect_capacitor", winRate: 75 }, { cardId: "defect_synthesis", winRate: 74 },
            { cardId: "defect_signal_boost", winRate: 73 }, { cardId: "defect_echo_form", winRate: 72 }
        ]
    },
    {
        id: "defect_echo_form", name: "回响形态", class: "defect", rarity: "rare", cost: 3, type: "power",
        description: "虚无。你每回合打出的第一张牌会被打出两次。", image: getCardImage("回响形态"), upgradedImage: getCardUpgradedImage("回响形态"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 75.2 }, upgraded: { winRate: 82.5 } },
        synergies: [
            { cardId: "defect_defragment", winRate: 92 }, { cardId: "defect_glacier", winRate: 90 },
            { cardId: "defect_capacitor", winRate: 88 }, { cardId: "defect_biased_cognition", winRate: 86 },
            { cardId: "defect_signal_boost", winRate: 85 }, { cardId: "defect_darkness", winRate: 83 },
            { cardId: "defect_buffer", winRate: 82 }, { cardId: "defect_genetic_algorithm", winRate: 78 }
        ]
    },
    {
        id: "defect_biased_cognition", name: "偏差认知", class: "defect", rarity: "ancient", cost: 1, type: "power",
        description: "获得4点集中。在你的回合开始时，失去1点集中。", image: getCardImage("偏差认知"), upgradedImage: getCardUpgradedImage("偏差认知"), cssBg: getCardCssBg("power"),
        stats: { normal: { winRate: 72.5 }, upgraded: { winRate: 78.2 } },
        synergies: [
            { cardId: "defect_echo_form", winRate: 90 }, { cardId: "defect_signal_boost", winRate: 88 },
            { cardId: "defect_defragment", winRate: 80 }, { cardId: "defect_glacier", winRate: 78 },
            { cardId: "defect_ball_lightning", winRate: 76 }, { cardId: "defect_hotfix", winRate: 73 },
            { cardId: "defect_buffer", winRate: 68 }
        ]
    }
];

function getCardById(id) {
    return cardsDatabase.find(card => card.id === id);
}

console.log('🔵 故障机器人卡牌数据已加载');
console.log('📊 总计 ' + cardsDatabase.length + ' 张卡牌');
console.log('🖼️ 卡牌图片: ' + Object.keys(knownImages).length + ' 张');