const commonAmmoCategories = () => {
  const ret: { [k: string]: number[] } = {
    bow_t1: [
      882, 883, 5616, 5622, // Bronze arrow + variants
      884, 885, 5617, 5623, // Iron arrow + variants
    ],
    cb_t1: [
      877, 878, 6061, 6062, 879, 9236, // Bronze bolts + variants, opal bolts + (e)
    ],
    javelin: [
      825, 831, 5642, 5648, // Bronze javelin + variants
      826, 832, 5643, 5649, // Iron javelin + variants
      827, 833, 5644, 5650, // Steel javelin + variants
      828, 834, 5645, 5651, // Mithril javelin + variants
      829, 835, 5646, 5652, // Adamant javelin + variants
      830, 836, 5647, 5653, // Rune javelin + variants
      21318, 21320, 21322, 21324, // Amethyst javelin + variants
      19484, 19486, 19488, 19490, // Dragon javelin + variants
    ],
  };

  // Bows
  ret.bow_t5 = [...ret.bow_t1, 886, 887, 5618, 5624]; // Steel arrow + variants
  ret.bow_t20 = [...ret.bow_t5, 888, 889, 5619, 5625]; // Mithril arrow + variants
  ret.bow_t30 = [...ret.bow_t20, 890, 891, 5620, 5626]; // Adamant arrow + variants
  ret.bow_t40 = [...ret.bow_t30, 892, 893, 5621, 5627, 78]; // Rune arrow + variants, ice arrows
  ret.bow_t50 = [...ret.bow_t40, 21326, 21332, 21334, 21336, 4160]; // Amethyst arrow + variants, broad arrows
  ret.bow_t60 = [...ret.bow_t50, 11212, 11227, 11228, 11229]; // Dragon arrow + variants

  // Bolts
  ret.cb_t16 = [...ret.cb_t1, 9139, 9286, 9293, 9300, 9335, 9237]; // Blurite bolts + variants, jade bolts + (e)
  ret.cb_t26 = [...ret.cb_t16, 9140, 9287, 9294, 9301, 880, 9238, 9145, 9292, 9299, 9306]; // Iron bolts + variants, pearl bolts + (e), silver bolts
  ret.cb_t31 = [...ret.cb_t26, 9141, 9288, 9295, 9302, 9336, 9239]; // Steel bolts + variants, topaz bolts + (e)
  ret.cb_t36 = [...ret.cb_t31, 9142, 9289, 9296, 9303, 9337, 9240, 9338, 9241]; // Mithril bolts + variants, sapphire/emerald bolts + (e)
  ret.cb_t46 = [...ret.cb_t36, 9143, 9290, 9297, 9304, 9339, 9242, 9340, 9243]; // Adamant bolts + variants, ruby/diamond bolts + (e)
  ret.cb_t61 = [...ret.cb_t46, 9144, 9291, 9298, 9305, 11875, 21316, 9341, 9244, 9342, 9245]; // Runite bolts + variants, broad bolts, amethyst broad bolts, dragonstone/onyx bolts + (e)
  ret.cb_t64 = [...ret.cb_t61, 21905, 21924, 21926, 21928, 21955, 21932, 21957, 21934, 21959, 21936, 21961, 21938, 21963, 21940, 21965, 21942, 21967, 21944, 21969, 21946, 21971, 21948, 21973, 21950]; // Dragon bolts + variants, many gem-tipped bolts
  return ret;
};

/**
 * A map of item ID -> array of item IDs for which ranged weapons can use which specific types of ammo.
 * Empty arrays indicate that the item should not be used with any ammo in the ammo slot at all.
 */
const ammoForRangedWeapons: { [weapon: number]: number[] } = {
  11708: commonAmmoCategories().bow_t1, // Cursed goblin bow
  23357: commonAmmoCategories().bow_t1, // Rain bow
  9705: [9706], // Training bow
  841: commonAmmoCategories().bow_t1, // Shortbow
  839: commonAmmoCategories().bow_t1, // Longbow
  843: commonAmmoCategories().bow_t5, // Oak shortbow
  845: commonAmmoCategories().bow_t5, // Oak longbow
  4236: commonAmmoCategories().bow_t5, // Signed oak bow
  849: commonAmmoCategories().bow_t20, // Willow shortbow
  847: commonAmmoCategories().bow_t20, // Willow longbow
  10280: commonAmmoCategories().bow_t20, // Willow comp bow
  853: commonAmmoCategories().bow_t30, // Maple shortbow
  851: commonAmmoCategories().bow_t30, // Maple longbow
  2883: [2866], // Ogre bow
  4827: [2866, 4773, 4778, 4783, 4788, 4793, 4798, 4803], // Comp ogre bow
  857: commonAmmoCategories().bow_t40, // Yew shortbow
  855: commonAmmoCategories().bow_t40, // Yew longbow
  10282: commonAmmoCategories().bow_t40, // Yew comp bow
  6724: commonAmmoCategories().bow_t50, // Seercull
  861: commonAmmoCategories().bow_t50, // Magic shortbow
  12788: commonAmmoCategories().bow_t50, // Magic shortbow (i)
  859: commonAmmoCategories().bow_t50, // Magic longbow
  10284: commonAmmoCategories().bow_t50, // Magic comp bow
  11235: commonAmmoCategories().bow_t60, // Dark bow
  27853: commonAmmoCategories().bow_t60, // Dark bow (bh)
  12424: commonAmmoCategories().bow_t60, // 3rd age bow
  27610: commonAmmoCategories().bow_t60, // Venator bow
  27612: commonAmmoCategories().bow_t60, // Venator bow (uncharged)
  20997: commonAmmoCategories().bow_t60, // Twisted bow
  837: commonAmmoCategories().cb_t1, // Crossbow
  767: commonAmmoCategories().cb_t1, // Phoenix crossbow
  9174: commonAmmoCategories().cb_t1, // Bronze crossbow
  9176: commonAmmoCategories().cb_t16, // Blurite crossbow
  9177: commonAmmoCategories().cb_t26, // Iron crossbow
  9179: commonAmmoCategories().cb_t31, // Steel crossbow
  9181: commonAmmoCategories().cb_t36, // Mithril crossbow
  9183: commonAmmoCategories().cb_t46, // Adamant crossbow
  9185: commonAmmoCategories().cb_t61, // Rune crossbow
  21902: commonAmmoCategories().cb_t64, // Dragon crossbow
  19478: commonAmmoCategories().javelin, // Light ballista
  19481: commonAmmoCategories().javelin, // Heavy ballista
  8880: [...commonAmmoCategories().cb_t16, 9140, 9287, 9294, 9301, 8882], // Dorgeshuun crossbow
  10156: [10158, 10159], // Hunters' crossbow
  4734: [4740], // Karil's crossbow (undmg)
  21012: commonAmmoCategories().cb_t64, // Dragon hunter crossbow
  11785: commonAmmoCategories().cb_t64, // Armadyl crossbow
  26374: commonAmmoCategories().cb_t64, // Zaryte crossbow
  12924: [], // Toxic blowpipe (empty)
  12926: [], // Toxic blowpipe (charged)
  22547: [], // Craw's bow (empty)
  22550: [], // Craw's bow (charged)
  23983: [], // Crystal bow (empty)
  23985: [], // Crystal bow (inactive)
  24123: [], // Crystal bow (new)
  27652: [], // Webweaver bow (empty)
  27655: [], // Webweaver bow (charged)
  25862: [], // Bow of faerdhinen (empty)
  25865: [], // Bow of faerdhinen (charged)
  25867: [], // Bow of faerdhinen (c)
};

/**
 * Returns whether the given ammo item ID is valid ammo for the given ranged weapon ID.
 * Will return true if no weapon is equipped, or no ranged weapon is equipped.
 * @param weaponId - the item ID of the ranged weapon
 * @param ammoId - the item ID of the ammo (such as bronze arrows)
 */
export const isValidAmmoForRangedWeapon = (weaponId?: number, ammoId?: number) => {
  if (!weaponId) return true; // No weapon, ammo is valid
  if (!Object.prototype.hasOwnProperty.call(ammoForRangedWeapons, weaponId)) return true; // Probably not a ranged weapon, ammo is valid

  const validAmmo = ammoForRangedWeapons[weaponId];
  if (validAmmo.length === 0 && ammoId === undefined) return true; // No ammo is valid for this weapon, no ammo was passed, valid
  if (ammoId && validAmmo.includes(ammoId)) return true; // Ammo can be used with this weapon

  return false; // Ammo is not valid for this weapon
};

/**
 * A map of item ID -> item ID for items that are identical in function, but different in appearance. This includes
 * "locked" variants of items, broken/degraded variants of armour and weapons, and cosmetic recolours of equipment.
 * @see https://oldschool.runescape.wiki/w/Trouver_parchment
 */
export const equipmentAliases = {
  24141: 8849, // Adamant defender#Locked
  4856: 4708, // Ahrim's hood#100
  4859: 4708, // Ahrim's hood#25
  4858: 4708, // Ahrim's hood#50
  4857: 4708, // Ahrim's hood#75
  4874: 4714, // Ahrim's robeskirt#100
  4877: 4714, // Ahrim's robeskirt#25
  4876: 4714, // Ahrim's robeskirt#50
  4875: 4714, // Ahrim's robeskirt#75
  4868: 4712, // Ahrim's robetop#100
  4871: 4712, // Ahrim's robetop#25
  4870: 4712, // Ahrim's robetop#50
  4869: 4712, // Ahrim's robetop#75
  4862: 4710, // Ahrim's staff#100
  4865: 4710, // Ahrim's staff#25
  4864: 4710, // Ahrim's staff#50
  4863: 4710, // Ahrim's staff#75
  24203: 24201, // Ancient halo#Locked
  27626: 27624, // Ancient sceptre#Locked
  26768: 11771, // Archers ring (i)#Emir's Arena
  25260: 11771, // Archers ring (i)#Soul Wars
  24194: 24192, // Armadyl halo#Locked
  24135: 21898, // Assembler max cape#Locked
  24222: 22109, // Ava's assembler#Locked
  24186: 22322, // Avernic defender#Locked
  24197: 24195, // Bandos halo#Locked
  25643: 25641, // Barronite mace#Locked
  26770: 11773, // Berserker ring (i)#Emir's Arena
  25264: 11773, // Berserker ring (i)#Soul Wars
  24139: 8847, // Black defender#Locked
  19639: 11864, // Black slayer helmet#
  28473: 28260, // Blood ancient sceptre#Locked
  24206: 24204, // Brassica halo#Locked
  24136: 8844, // Bronze defender#Locked
  26756: 26755, // Calamity breeches#Locked
  26750: 26749, // Calamity chest#Locked
  26722: 26721, // Centurion cuirass#Locked
  24158: 4509, // Decorative armour (gold platebody)#Locked
  24159: 4510, // Decorative armour (gold platelegs)#Locked
  24162: 11895, // Decorative armour (gold plateskirt)#Locked
  24165: 11898, // Decorative armour (magic hat)#Locked
  24164: 11897, // Decorative armour (magic legs)#Locked
  24163: 11896, // Decorative armour (magic top)#Locked
  24168: 11901, // Decorative armour (quiver)#Locked
  24167: 11900, // Decorative armour (ranged legs)#Locked
  24166: 11899, // Decorative armour (ranged top)#Locked
  25173: 25171, // Decorative boots (gold)#Locked
  25176: 25174, // Decorative full helm (gold)#Locked
  24160: 4511, // Decorative helm (gold)#Locked
  24161: 4512, // Decorative shield (gold)#Locked
  24157: 4508, // Decorative sword (gold)#Locked
  4886: 4718, // Dharok's greataxe#100
  4889: 4718, // Dharok's greataxe#25
  4888: 4718, // Dharok's greataxe#50
  4887: 4718, // Dharok's greataxe#75
  4880: 4716, // Dharok's helm#100
  4883: 4716, // Dharok's helm#25
  4882: 4716, // Dharok's helm#50
  4881: 4716, // Dharok's helm#75
  4892: 4720, // Dharok's platebody#100
  4895: 4720, // Dharok's platebody#25
  4894: 4720, // Dharok's platebody#50
  4893: 4720, // Dharok's platebody#75
  4898: 4722, // Dharok's platelegs#100
  4901: 4722, // Dharok's platelegs#25
  4900: 4722, // Dharok's platelegs#50
  4899: 4722, // Dharok's platelegs#75
  24143: 12954, // Dragon defender#Locked
  27008: 19722, // Dragon defender (t)#Locked
  26760: 26759, // Elite calamity breeches#Locked
  26754: 26753, // Elite calamity chest#Locked
  24180: 13073, // Elite void robe#Locked
  27004: 26471, // Elite void robe (or)#Locked
  24178: 13072, // Elite void top#Locked
  27003: 26469, // Elite void top (or)#Locked
  24173: 10548, // Fighter hat#Locked
  24175: 10551, // Fighter torso#Locked
  28069: 28067, // Fighter torso (or)#Locked
  24223: 6570, // Fire cape#Locked
  24134: 13329, // Fire max cape#Locked
  27551: 27550, // Ghommal's avernic defender 5#Locked
  27553: 27552, // Ghommal's avernic defender 6#Locked
  26685: 21752, // Granite ring (i)#Emir's Arena
  25193: 21752, // Granite ring (i)#Soul Wars
  19643: 11864, // Green slayer helmet#
  4922: 4730, // Guthan's chainskirt#100
  4925: 4730, // Guthan's chainskirt#25
  4924: 4730, // Guthan's chainskirt#50
  4923: 4730, // Guthan's chainskirt#75
  4904: 4724, // Guthan's helm#100
  4907: 4724, // Guthan's helm#25
  4906: 4724, // Guthan's helm#50
  4905: 4724, // Guthan's helm#75
  4916: 4728, // Guthan's platebody#100
  4919: 4728, // Guthan's platebody#25
  4918: 4728, // Guthan's platebody#50
  4917: 4728, // Guthan's platebody#75
  4910: 4726, // Guthan's warspear#100
  4913: 4726, // Guthan's warspear#25
  4912: 4726, // Guthan's warspear#50
  4911: 4726, // Guthan's warspear#75
  24171: 12639, // Guthix halo#Locked
  24172: 10547, // Healer hat#Locked
  23073: 11864, // Hydra slayer helmet#
  28474: 28262, // Ice ancient sceptre#Locked
  24249: 21793, // Imbued guthix cape#Locked
  24234: 21784, // Imbued guthix max cape#Locked
  24248: 21791, // Imbued saradomin cape#Locked
  24232: 21776, // Imbued saradomin max cape#Locked
  24250: 21795, // Imbued zamorak cape#Locked
  24233: 21780, // Imbued zamorak max cape#Locked
  24224: 21295, // Infernal cape#Locked
  24133: 21285, // Infernal max cape#Locked
  24137: 8845, // Iron defender#Locked
  4928: 4732, // Karil's coif#100
  4931: 4732, // Karil's coif#25
  4930: 4732, // Karil's coif#50
  4929: 4732, // Karil's coif#75
  4934: 4734, // Karil's crossbow#100
  4937: 4734, // Karil's crossbow#25
  4936: 4734, // Karil's crossbow#50
  4935: 4734, // Karil's crossbow#75
  4946: 4738, // Karil's leatherskirt#100
  4949: 4738, // Karil's leatherskirt#25
  4948: 4738, // Karil's leatherskirt#50
  4947: 4738, // Karil's leatherskirt#75
  4940: 4736, // Karil's leathertop#100
  4943: 4736, // Karil's leathertop#25
  4942: 4736, // Karil's leathertop#50
  4941: 4736, // Karil's leathertop#75
  26742: 26741, // Koriff's coif#Locked
  26740: 26739, // Koriff's cowl#Locked
  26738: 26737, // Koriff's headband#Locked
  26746: 26745, // Maoma's full helm#Locked
  26748: 26747, // Maoma's great helm#Locked
  26744: 26743, // Maoma's med helm#Locked
  27376: 27374, // Masori assembler#Locked
  27365: 27363, // Masori assembler max cape#Locked
  24140: 8848, // Mithril defender#Locked
  24176: 10555, // Penance skirt#Locked
  21264: 11864, // Purple slayer helmet#
  24174: 10550, // Ranger hat#Locked
  19647: 11864, // Red slayer helmet#
  26764: 13202, // Ring of the gods (i)#Emir's Arena
  25252: 13202, // Ring of the gods (i)#Soul Wars
  24142: 8850, // Rune defender#Locked
  27009: 23230, // Rune defender (t)#Locked
  24533: 10549, // Runner hat#Locked
  26732: 26731, // Saika's hood#Locked
  26736: 26735, // Saika's shroud#Locked
  26734: 26733, // Saika's veil#Locked
  26782: 12018, // Salve amulet(ei)#Emir's Arena
  25278: 12018, // Salve amulet(ei)#Soul Wars
  26763: 12017, // Salve amulet(i)#Emir's Arena
  25250: 12017, // Salve amulet(i)#Soul Wars
  24169: 12637, // Saradomin halo#Locked
  26767: 11770, // Seers ring (i)#Emir's Arena
  25258: 11770, // Seers ring (i)#Soul Wars
  24200: 24198, // Seren halo#Locked
  28476: 28266, // Shadow ancient sceptre#Locked
  26674: 11865, // Slayer helmet (i)#Emir's Arena
  25177: 11865, // Slayer helmet (i)#Soul Wars
  28475: 28264, // Smoke ancient sceptre#Locked
  24138: 8846, // Steel defender#Locked
  26758: 26757, // Superior calamity breeches#Locked
  26752: 26751, // Superior calamity chest#Locked
  4958: 4747, // Torag's hammers#100
  4961: 4747, // Torag's hammers#25
  4960: 4747, // Torag's hammers#50
  4959: 4747, // Torag's hammers#75
  4952: 4745, // Torag's helm#100
  4955: 4745, // Torag's helm#25
  4954: 4745, // Torag's helm#50
  4953: 4745, // Torag's helm#75
  4964: 4749, // Torag's platebody#100
  4967: 4749, // Torag's platebody#25
  4966: 4749, // Torag's platebody#50
  4965: 4749, // Torag's platebody#75
  4970: 4751, // Torag's platelegs#100
  4973: 4751, // Torag's platelegs#25
  4972: 4751, // Torag's platelegs#50
  4971: 4751, // Torag's platelegs#75
  26766: 12692, // Treasonous ring (i)#Emir's Arena
  25256: 12692, // Treasonous ring (i)#Soul Wars
  21888: 11864, // Turquoise slayer helmet#
  24370: 11864, // Twisted slayer helmet#
  26765: 12691, // Tyrannical ring (i)#Emir's Arena
  25254: 12691, // Tyrannical ring (i)#Soul Wars
  25910: 11864, // Tzkal slayer helmet#
  25898: 11864, // Tztok slayer helmet#
  25904: 11864, // Vampyric slayer helmet#
  4988: 4757, // Verac's brassard#100
  4991: 4757, // Verac's brassard#25
  4990: 4757, // Verac's brassard#50
  4989: 4757, // Verac's brassard#75
  4982: 4755, // Verac's flail#100
  4985: 4755, // Verac's flail#25
  4984: 4755, // Verac's flail#50
  4983: 4755, // Verac's flail#75
  4976: 4753, // Verac's helm#100
  4979: 4753, // Verac's helm#25
  4978: 4753, // Verac's helm#50
  4977: 4753, // Verac's helm#75
  4994: 4759, // Verac's plateskirt#100
  4997: 4759, // Verac's plateskirt#25
  4996: 4759, // Verac's plateskirt#50
  4995: 4759, // Verac's plateskirt#75
  24182: 8842, // Void knight gloves#Locked
  27002: 26467, // Void knight gloves (or)#Locked
  24181: 8841, // Void knight mace#Locked
  24179: 8840, // Void knight robe#Locked
  27001: 26465, // Void knight robe (or)#Locked
  24177: 8839, // Void knight top#Locked
  27000: 26463, // Void knight top (or)#Locked
  24183: 11663, // Void mage helm#Locked
  27005: 26473, // Void mage helm (or)#Locked
  24185: 11665, // Void melee helm#Locked
  27007: 26477, // Void melee helm (or)#Locked
  24184: 11664, // Void ranger helm#Locked
  27006: 26475, // Void ranger helm (or)#Locked
  26769: 11772, // Warrior ring (i)#Emir's Arena
  25262: 11772, // Warrior ring (i)#Soul Wars
  26724: 26723, // Wristbands of the arena#Locked
  26728: 26727, // Wristbands of the arena (i)#Locked
  24170: 12638, // Zamorak halo#Locked
};