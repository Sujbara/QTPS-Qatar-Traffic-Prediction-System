import React, { useState, useEffect } from 'react';
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const streetsData = [
  { name: 'شارع المنصورة', value: 1, frc: 5},
  { name: 'شارع الميناء', value: 2, frc: 2},
  { name: 'شارع حسان بن ثابت', value: 3, frc: 4},
  { name: 'شارع نجمة', value: 4, frc: 5},
  { name: 'شارع سعيد بن العاص', value: 5, frc: 5},
  { name: 'شارع ام غويلينة', value: 6, frc: 5},
  { name: 'شارع قطري بن الفجاءة', value: 7, frc: 5 },
  { name: 'شارع الكسارات', value: 8, frc: 4 },
  { name: 'شارع الصناعية الغربي', value: 9, frc: 3 },
  { name: 'شارع ام الدوم', value: 10, frc: 4 },
  { name: 'شارع المعيذر', value: 11, frc: 4 },
  { name: 'شارع السويمرة', value: 12, frc: 5 },
  { name: 'شارع الجهراء', value: 13, frc: 5 },
  { name: 'شارع مدرسة النجاح', value: 14, frc: 4 },
  { name: 'شارع الشقب', value: 15, frc: 5 },
  { name: 'شارع وجبة الاصيل', value: 16, frc: 5 },
  { name: 'شارع الآثار', value: 17, frc: 5 },
  { name: 'شارع الرفاع الجديد', value: 18, frc: 4},
  { name: 'شارع الزبارة', value: 19, frc: 3 },
  { name: 'شارع ابا الصليل', value: 20, frc: 5 },
  { name: 'شارع الماجدة', value: 21, frc: 3 },
  { name: 'شارع حوار', value: 22, frc: 3},
  { name: 'شارع حزم المرخية', value: 23, frc: 4},
  { name: 'شارع واسط', value: 24, frc: 4 },
  { name: 'شارع البيئة', value: 25, frc: 4},
  { name: 'شارع ام الزبار', value: 26, frc:  5},
  { name: 'شارع النجدة', value: 27, frc: 5},
  { name: 'شارع عبدالعزيز بن احمد', value: 28, frc: 4 },
  { name: 'شارع حديقه المتحف', value: 29, frc: 4 },
  { name: 'شارع ابن درهم', value: 30, frc: 5 },
  { name: 'شارع مليــحة', value: 31, frc: 5 },
  { name: 'شارع معيذر الجنوبية', value: 32, frc: 5 },
  { name: 'شارع الحاير', value: 33, frc: 5 },
  { name: 'شارع لحويلة', value: 34, frc: 4 },
  { name: 'شارع عقبة بن نافع', value: 35, frc: 5 },
  { name: 'شارع الكورنيش', value: 36, frc: 1 },
  { name: 'الطريق الدائري الرابع', value: 37, frc: 2 },
  { name: 'شارع المطار', value: 38, frc: 2 },
  { name: 'الطريق الدائري الثالث', value: 39, frc: 2},
  { name: 'شارع الجزيرة', value: 40, frc: 3 },
  { name: 'طريق الشمال', value: 41, frc: 0 },
  { name: 'شارع الروابي', value: 42, frc: 3 },
  { name: 'شارع الفروسية', value: 43, frc: 2 },
  { name: 'شارع الوعب', value: 44, frc: 4 },
  { name: 'شارع الجامعة', value: 45, frc: 2 },
  { name: 'شارع اسباير زون', value: 46, frc: 3 },
  { name: 'شارع الجزيرة العربية', value: 47, frc: 5 },
  { name: 'شارع احمد بن علي', value: 48, frc: 2 },
  { name: 'شارع خالد بن احمد', value: 49, frc: 4 },
  { name: 'شارع اسامة بن زيد', value: 50, frc: 4 },
  { name: 'طريق سلوى', value: 51, frc: 3 },
  { name: 'شارع المجاهد عمر المختار', value: 52, frc: 3 },
  { name: 'شارع الفندق', value: 53, frc: 3 },
  { name: 'طريق مسيعيد', value: 54, frc: 3 },
  { name: 'شارع سحيم بن حمد', value: 55, frc: 2 },
  { name: 'شارع الجوعان', value: 56, frc: 2 },
  { name: 'الطريق الدائري الخامس', value: 57, frc: 4 },
  { name: 'شارع البدع', value: 58, frc: 3 },
  { name: 'شارع مركز المؤتمرات', value: 59, frc: 3 },
  { name: 'طريق الدوحة السريع', value: 60, frc: 3 },
  { name: 'شارع الحي الدبلوماسي', value: 61, frc: 3 },
  { name: 'شارع الدفنة', value: 62, frc: 3 },
  { name: 'شارع راس بو عبود', value: 63, frc: 1 },
  { name: 'شارع وادي لوبرة', value: 64, frc: 5 },
  { name: 'شارع صنع السداري', value: 65, frc: 4 },
  { name: 'شارع أم المواقع', value: 66, frc: 4 },
  { name: 'طريق السيلية الجديد', value: 67, frc: 4 },
  { name: 'طريق السيلية', value: 68, frc: 3 },
  { name: 'شارع طوّار الحريثي', value: 69, frc: 5 },
  { name: 'ام الجماجم', value: 70, frc: 3 },
  { name: 'شارع الامير', value: 71, frc: 1 },
  { name: 'شارع 22 فبراير', value: 72, frc: 3 },
  { name: 'شارع صنيع أبو حصى', value: 73, frc: 4 },
  { name: 'شارع السلمية', value: 74, frc: 3 },
  { name: 'شارع المطار القديم', value: 75, frc: 2 },
  { name: 'شارع الغارية', value: 76, frc: 4 },
  { name: 'شارع عين خالد', value: 77, frc: 4 },
  { name: 'طريق المدينة الرياضية', value: 78, frc: 3 },
  { name: 'شارع السوق المركزي', value: 79, frc: 3 },
  { name: 'شارع السدر', value: 80, frc: 3 },
  { name: 'شارع ام السنيم', value: 81, frc: 3 },
  { name: 'شارع بلهمبار', value: 82, frc: 4 },
  { name: 'شارع 1138', value: 83, frc: 4 },
  { name: 'شارع 1120', value: 84, frc: 4 },
  { name: 'شارع بو سمرة', value: 85, frc: 5 },
  { name: 'شارع 1121', value: 86, frc: 4 },
  { name: 'شارع 1115', value: 87, frc: 4 },
  { name: 'شارع 1117', value: 88, frc: 4 },
  { name: 'شارع 1116', value: 89, frc: 4 },
  { name: 'شارع الكنانة', value: 90, frc: 5 },
  { name: 'شارع السد', value: 91, frc: 3 },
  { name: 'شارع القدس', value: 92, frc: 3 },
  { name: 'شارع الصنع', value: 93, frc: 4 },
  { name: 'شارع الرويس', value: 94, frc: 5 },
  { name: 'شارع خليفة', value: 95, frc: 2 },
  { name: 'طريق الدائري السابع', value: 96, frc: 2 },
  { name: 'شارع 1010', value: 97, frc: 4 },
  { name: 'شارع المرخية', value: 98, frc: 1 },
  { name: 'شارع الصناعية الشرقي', value: 99, frc: 2 },
  { name: 'شارع روضة النيسر', value: 100, frc: 4},
  { name: 'شارع 102', value: 101, frc: 4 },
  { name: 'شارع الهام', value: 102, frc: 4 },
  { name: 'شارع دبي', value: 103, frc: 4 },
  { name: 'شارع بو هامور', value: 104, frc: 4 },
  { name: 'شارع شمال معيطر', value: 105, frc: 5 },
  { name: 'شارع مسيمير', value: 106, frc: 3 },
  { name: 'الطريق الدائري السادس', value: 107, frc: 3 },
  { name: 'طريق جنوب السيلية', value: 108, frc: 3 },
  { name: 'شارع 33', value: 109, frc: 3 },
  { name: 'الوكرة الطريق', value: 110, frc: 4 },
  { name: 'شارع روضة الخيل', value: 111, frc: 4 },
  { name: 'شارع علي بن عبدالله', value: 112, frc: 2 },
  { name: 'شارع جاسم بن محمد', value: 113, frc: 5 },
  { name: 'شارع مشيرب', value: 114, frc: 2 },
  { name: 'شارع المدينة الرياضية', value: 115, frc: 3 },
  { name: 'شارع جامعة الدول العربية', value: 116, frc: 3},
  { name: 'شارع أم السنيم', value: 117, frc: 3 },
  { name: 'طريق الريان', value: 118, frc: 5 },
  { name: 'شارع عمرو بن العاص', value: 119, frc: 4 },
  { name: 'شارع السامرية', value: 120, frc: 4 },
  { name: 'شارع القعابية', value: 121, frc: 5 },
  { name: 'شارع الريان الجديد', value: 122, frc: 3 },
  { name: 'شارع الغرافة', value: 123, frc: 2 },
  { name: 'شارع الطائف', value: 124, frc: 4 },
  { name: 'شارع الشديدة', value: 125, frc: 5 },
  { name: 'شارع القلعة', value: 126, frc: 3 },
  { name: 'شارع الريان العتيق', value: 127, frc: 5 },
  { name: 'محور صباح الاحمد', value: 128, frc: 5 },
  { name: 'شارع البديع', value: 129, frc: 5 },
  { name: 'شارع الاتحاد', value: 130, frc: 5 },
  { name: 'شارع احمد بن محمد بن ثاني', value: 131, frc: 2 },
  { name: 'طريق الصناعية الشرقي', value: 132, frc: 2 },
  { name: 'شارع المنتزه', value: 133, frc: 2 },
  { name: 'شارع الديوان', value: 134, frc: 2 },
  { name: 'الطريق الدائري الثاني', value: 135, frc: 3 },
  { name: 'شارع الهناء', value: 136, frc: 3 },
  { name: 'شارع جاسم بن علي', value: 137, frc: 4 },
  { name: 'طريق مسيمير', value: 138, frc: 3 },
  { name: 'طريق الوكرة', value: 139, frc: 2 },
  { name: 'شارع المعاضيد', value: 140, frc: 4 },
  { name: 'شارع لوسيل', value: 141, frc: 3 },
  { name: 'شارع البستان', value: 142, frc: 3 },
  { name: 'شارع مكة المكرمة', value: 143, frc: 3 },
  { name: 'شارع الخفجي', value: 144, frc: 2 },
  { name: 'شارع محمد بن ثاني', value: 145, frc: 2 },
  { name: 'طريق الوكرة الجديد', value: 146, frc: 4 },
  { name: 'شارع بعيا', value: 147, frc: 4 },
  { name: 'شارع جري الذيب', value: 148, frc:4 },
  { name: 'شارع العنابي', value: 149, frc: 4 },
  { name: 'شارع اللقطة', value: 150, frc: 3 },
  { name: 'الظفرة', value: 151, frc: 4 },
  { name: 'شارع الخليج', value: 152, frc: 3 },
  { name: 'شارع صلاح الدين', value: 153, frc:5 },
  { name: 'شارع اوجاب الرجا', value: 154, frc: 5 },
  { name: 'شارع عنيزة', value: 155, frc: 3 },
  { name: 'شارع السلام', value: 156, frc: 3 },
  { name: 'شارع ام الجماجم', value: 157, frc: 3 },
  { name: 'شارع الوجبة', value: 158, frc: 4 },
  { name: 'طريق المنطقة الصناعية', value: 159, frc: 4 },
  { name: 'شارع الرميله', value: 160, frc: 5 },
  { name: 'شارع الشفلحية', value: 161, frc: 4 },
  { name: 'شارع نقا ام قرن', value: 162, frc: 3 },
  { name: 'شارع الشافعي', value: 163, frc: 3 },
  { name: 'شارع المتحف', value: 164, frc: 2 },
  { name: 'شارع الحطيم الجديد', value: 165, frc: 4 },
  { name: 'شارع جابر بن حيان', value: 166, frc: 4 },
  { name: 'طريق المجد', value: 167, frc: 4 },
  { name: 'شارع الطاقة', value: 168, frc: 3 },
  { name: 'شارع جير بن محمد', value: 169, frc: 5 },
  { name: 'خالد بن احمد', value: 170, frc: 4 },
  { name: 'شارع عبد العزيز بن جاسم', value: 171, frc: 2 },
  { name: 'شارع المسحبية', value: 172, frc: 4 },
  { name: 'شارع وادي مشيرب', value: 173, frc: 2 },
  { name: 'شارع رشيدة', value: 174, frc: 3 },
  { name: 'شارع حمد الكبير', value: 175, frc: 2 },
  { name: 'شارع ثانى بن جاسم', value: 176, frc: 5 },
  { name: 'ام الزبار', value: 177, frc: 5 },
  { name: 'شارع وعب الخراب', value: 178, frc: 5 },
  { name: 'شارع الريان القديم', value: 179, frc: 5 },
  { name: 'شارع 1201', value: 180, frc: 4 },
  { name: 'طريق السيلية الجديدة أ و ب', value: 181, frc: 4 },
  { name: 'شارع فشت الديبل', value: 182, frc: 5 },
  { name: 'شارع روضة المية', value: 183, frc: 4 },
  { name: 'شارع 6', value: 184, frc: 3 },
  { name: 'شارع جوعان', value: 185, frc: 3 },
  { name: 'شارع 1118', value: 186, frc: 4 },
  { name: 'شارع الجوشن', value: 187, frc: 3 },
  { name: 'دوار البدع', value: 188, frc: 2 },
  { name: 'دوار المرقاب', value: 189, frc: 2 },
  { name: 'شارع قلعة العسكر', value: 190, frc: 2 },
  { name: 'شارع علي بن ابي طالب', value: 191, frc: 3 },
  { name: 'شارع 1', value: 192, frc: 4 },
  { name: 'شارع السديرة', value: 193, frc: 3 },
  { name: 'شارع حالول', value: 194, frc: 3 },
  { name: 'شارع الحمد', value: 195, frc: 5 },
  { name: 'تقاطع العسيري', value: 196, frc: 1 },
  { name: 'دوار الدفاع المدني', value: 197, frc: 3 },
  { name: 'شارع النعمان', value: 198, frc: 4 },
  { name: 'شارع محمد بن القاسم', value: 199, frc: 5},
  { name: 'شارع جاسم بن حمد', value: 200, frc: 3 },
  { name: 'شارع عمر بن الخطاب', value: 201, frc: 3 },
  { name: 'شارع الحنيزبية', value: 202, frc: 4 },
  { name: 'شارع غرافة الريان', value: 203, frc: 3 },
  { name: 'شارع مدينة خليفة', value: 204, frc: 5 },
  { name: 'شارع السفراء', value: 205, frc: 3 },
  { name: 'شارع بو صلة', value: 206, frc: 4 },
  { name: '340 شارع', value: 207, frc: 3 },
  { name: '300 شارع', value: 208, frc: 3 },
  { name: '240 شارع', value: 209, frc: 3 },
  { name: 'شارع الشحيمية', value: 210, frc: 4 },
  { name: 'دوار الريان', value: 211, frc: 3 },
  { name: 'غرافة الريان', value: 212, frc: 3 },
  { name: 'شارع ابو هامور', value: 213, frc: 3 },
  { name: 'شارع مطابع الدوحة الحديثة', value: 214, frc: 3 },
  { name: 'شارع وادي لعطوريه', value: 215, frc: 4 },
  { name: 'شارع 1011', value: 216, frc: 4 },
  { name: 'شارع بالحنين', value: 217, fre: 3 },
  { name: 'شارع الجساسية', value: 218, frc: 3 },
  { name: 'شارع سدرية العب', value: 219, frc: 3 },
  { name: 'شارع بو شداد', value: 220, frc: 3 },
  { name: '232 شارع', value: 221, frc: 2 },
  { name: 'شارع الاشراق', value: 222, frc: 2 },
  { name: '812 شارع', value: 223, frc: 3 },
  { name: '150 شارع', value: 224, frc: 2 },
  { name: 'شارع الوبرة', value: 225, frc: 3 },
  { name: 'شارع صنيع بو حصى', value: 226, frc: 4 },
  { name: 'شارع راس لفان', value: 227, frc: 3 },
  { name: 'شارع ابطال اسيا 2019', value: 228, frc: 3 },
  { name: '310 شارع', value: 229, frc: 5 },
  { name: 'الطريق المداري الجديد', value: 230, frc: 1 },
  { name: 'شارع 1101', value: 231, frc: 5 },
  { name: 'شارع طلحة بن خالد', value: 232, frc: 3 },
  { name: 'شارع التعاون', value: 233, frc: 3 },
  { name: 'شارع الطواويش', value: 234, frc: 3 },
  { name: 'شارع الصقر', value: 235, frc: 5 },
  { name: 'شارع ابن تيمية', value: 236, frc: 4  }
];
const streetDistance = [
  {1: {'distance': 31.003282442748088}, 2: {'distance': 35.81164179104478}, 3: {'distance': 67.28032258064516}, 4: {'distance': 51.95717842323651}, 5: {'distance': 58.571666666666665}, 6: {'distance': 42.3772340425532}, 7: {'distance': 38.45627118644068}, 8: {'distance': 85.63674418604651}, 9: {'distance': 71.26818604651163}, 10: {'distance': 62.830882352941174}, 11: {'distance': 58.537142857142854}, 12: {'distance': 55.106857142857145}, 13: {'distance': 59.51959183673469}, 14: {'distance': 46.52755102040816}, 15: {'distance': 43.307325581395354}, 16: {'distance': 178.67999999999998}, 17: {'distance': 66.39399999999999}, 18: {'distance': 34.293214285714285}, 19: {'distance': 47.43845360824742}, 20: {'distance': 29.539999999999996}, 21: {'distance': 44.0025}, 22: {'distance': 67.32566265060241}, 23: {'distance': 86.82044444444445}, 24: {'distance': 72.70125}, 25: {'distance': 55.611525423728814}, 26: {'distance': 49.019999999999996}, 27: {'distance': 63.943333333333335}, 28: {'distance': 29.179411764705883}, 29: {'distance': 28.157708333333332}, 30: {'distance': 39.578125}, 31: {'distance': 41.90236842105263}, 32: {'distance': 60.2520909090909}, 33: {'distance': 95.42615384615384}, 34: {'distance': 46.39122448979592}, 35: {'distance': 53.735747126436785}, 36: {'distance': 50.881445086705206}, 37: {'distance': 79.27334693877552}, 38: {'distance': 53.58562674094708}, 39: {'distance': 49.070338983050846}, 40: {'distance': 25.63368421052632}, 41: {'distance': 61.10501742160279}, 42: {'distance': 39.904716981132076}, 43: {'distance': 76.32328571428572}, 44: {'distance': 44.56015337423313}, 45: {'distance': 71.98981481481482}, 46: {'distance': 53.615}, 47: {'distance': 52.62385321100918}, 48: {'distance': 54.157466666666664}, 49: {'distance': 78.79842105263158}, 50: {'distance': 71.78694915254238}, 51: {'distance': 101.28148232611176}, 52: {'distance': 68.45310344827585}, 53: {'distance': 40.535866666666664}, 54: {'distance': 116.07818181818182}, 55: {'distance': 32.69496894409938}, 56: {'distance': 44.28718309859155}, 57: {'distance': 76.9962}, 58: {'distance': 61.495670731707314}, 59: {'distance': 40.730377358490564}, 60: {'distance': 111.65610169491525}, 61: {'distance': 73.324}, 62: {'distance': 41.13547619047619}, 63: {'distance': 98.33610591900312}, 64: {'distance': 72.3976119402985}, 65: {'distance': 74.58263157894737}, 66: {'distance': 87.30654545454546}, 67: {'distance': 73.9795918367347}, 68: {'distance': 98.3899609375}, 69: {'distance': 63.973846153846154}, 70: {'distance': 90.77166666666666}, 71: {'distance': 97.22626315789473}, 72: {'distance': 86.97}, 73: {'distance': 62.821204819277106}, 74: {'distance': 47.23935185185185}, 75: {'distance': 9.51}, 76: {'distance': 50.72862068965517}, 77: {'distance': 54.44895833333333}, 78: {'distance': 48.70990740740741}, 79: {'distance': 56.8911475409836}, 80: {'distance': 40.14382352941177}, 81: {'distance': 70.2392}, 82: {'distance': 60.689787234042555}, 83: {'distance': 82.1804347826087}, 84: {'distance': 108.44818181818182}, 85: {'distance': 100.58380952380952}, 86: {'distance': 95.58105263157894}, 87: {'distance': 111.77716666666666}, 88: {'distance': 131.93428571428572}, 89: {'distance': 44.05461538461539}, 90: {'distance': 33.56650793650793}, 91: {'distance': 39.45666666666666}, 92: {'distance': 66.40819672131148}, 93: {'distance': 84.68380952380953}, 94: {'distance': 65.754}, 95: {'distance': 65.83621761658031}, 96: {'distance': 244.18544827586206}, 97: {'distance': 58.59378787878788}, 98: {'distance': 67.05395161290322}, 99: {'distance': 83.2778073089701}, 100: {'distance': 67.77369863013699}, 101: {'distance': 126.78777777777778}, 102: {'distance': 94.15518518518518}, 103: {'distance': 79.88761904761905}, 104: {'distance': 41.11633802816902}, 105: {'distance': 58.09463414634146}, 106: {'distance': 87.55448275862068}, 107: {'distance': 132.29724137931035}, 108: {'distance': 82.72846153846153}, 109: {'distance': 138.15}, 110: {'distance': 145.9188}, 111: {'distance': 44.309080459770115}, 112: {'distance': 36.22711538461539}, 113: {'distance': 27.52359375}, 114: {'distance': 49.84205882352941}, 115: {'distance': 39.85166666666667}, 116: {'distance': 72.68974358974359}, 117: {'distance': 79.32855263157894}, 118: {'distance': 51.42521582733813}, 119: {'distance': 54.16740740740741}, 120: {'distance': 52.62533333333334}, 121: {'distance': 43.69882352941176}, 122: {'distance': 67.4027813163482}, 123: {'distance': 52.802694610778445}, 124: {'distance': 57.03307692307692}, 125: {'distance': 47.440461538461534}, 126: {'distance': 51.397191011235954}, 127: {'distance': 50.15783783783784}, 128: {'distance': 69.36961538461539}, 129: {'distance': 48.948515625}, 130: {'distance': 34.29687074829932}, 131: {'distance': 30.68508982035928}, 132: {'distance': 86.09361111111112}, 133: {'distance': 120.71442196531792}, 134: {'distance': 27.308461538461536}, 135: {'distance': 35.32981395348837}, 136: {'distance': 46.10739130434782}, 137: {'distance': 30.76709677419355}, 138: {'distance': 49.83181372549019}, 139: {'distance': 66.39256410256411}, 140: {'distance': 67.45415730337078}, 141: {'distance': 128.44978260869564}, 142: {'distance': 57.056157205240176}, 143: {'distance': 27.595818181818185}, 144: {'distance': 69.60308571428573}, 145: {'distance': 44.57616}, 146: {'distance': 152.96424242424243}, 147: {'distance': 44.377804878048785}, 148: {'distance': 71.37115384615385}, 149: {'distance': 64.86999999999999}, 150: {'distance': 113.1147290640394}, 151: {'distance': 184.28083333333333}, 152: {'distance': 36.989010989010985}, 153: {'distance': 117.61253521126761}, 154: {'distance': 137.855}, 155: {'distance': 63.01554973821989}, 156: {'distance': 50.55898876404494}, 157: {'distance': 58.74571428571429}, 158: {'distance': 61.6079674796748}, 159: {'distance': 99.73066666666666}, 160: {'distance': 45.07}, 161: {'distance': 46.545}, 162: {'distance': 44.52125}, 163: {'distance': 39.94521739130435}, 164: {'distance': 43.33970588235294}, 165: {'distance': 71.77371794871794}, 166: {'distance': 58.054756097560976}, 167: {'distance': 824.1666666666666}, 168: {'distance': 132.49235294117645}, 169: {'distance': 34.74431034482759}, 170: {'distance': 94.50285714285715}, 171: {'distance': 66.42627450980392}, 172: {'distance': 64.54096774193549}, 173: {'distance': 39.19909090909091}, 174: {'distance': 75.60306122448979}, 175: {'distance': 28.863564356435642}, 176: {'distance': 26.6775}, 177: {'distance': 76.63833333333334}, 178: {'distance': 34.03333333333333}, 179: {'distance': 328.42}, 180: {'distance': 93.73814814814814}, 181: {'distance': 70.47250000000001}, 182: {'distance': 56.23238095238095}, 183: {'distance': 14.12}, 184: {'distance': 51.94377551020408}, 185: {'distance': 138.48}, 186: {'distance': 105.53666666666668}, 187: {'distance': 16.9}, 188: {'distance': 25.323}, 189: {'distance': 18.88}, 190: {'distance': 48.122083333333336}, 191: {'distance': 38.39666666666667}, 192: {'distance': 61.50415841584158}, 193: {'distance': 48.892020202020205}, 194: {'distance': 42.201875}, 195: {'distance': 46.09621621621622}, 196: {'distance': 30.627499999999998}, 197: {'distance': 13.877142857142857}, 198: {'distance': 43.05054054054054}, 199: {'distance': 26.249354838709678}, 200: {'distance': 60.90946564885497}, 201: {'distance': 84.51652173913044}, 202: {'distance': 143.64428571428573}, 203: {'distance': 79.36213333333333}, 204: {'distance': 69.6125}, 205: {'distance': 37.30114285714286}, 206: {'distance': 71.53794871794872}, 207: {'distance': 837.38}, 208: {'distance': 19.608666666666668}, 209: {'distance': 495.18}, 210: {'distance': 8.464375}, 211: {'distance': 29.09470588235294}, 212: {'distance': 89.65499999999999}, 213: {'distance': 81.78}, 214: {'distance': 94.36500000000001}, 215: {'distance': 64.13915662650602}, 216: {'distance': 76.65}, 217: {'distance': 17.755}, 218: {'distance': 41.18}, 219: {'distance': 63.6}, 220: {'distance': 9.55}, 221: {'distance': 13.62}, 222: {'distance': 183.22}, 223: {'distance': 139.88}, 224: {'distance': 13.38}, 225: {'distance': 10.87}, 226: {'distance': 9.038333333333334}, 227: {'distance': 10.8025}, 228: {'distance': 61.788888888888884}, 229: {'distance': 23.496666666666666}, 230: {'distance': 1033.81}, 231: {'distance': 405.97}, 232: {'distance': 17.67}, 233: {'distance': 84.52}, 234: {'distance': 12.925000000000002}, 235: {'distance': 22.47}, 236: {'distance': 6.66}}]

function App() {
  const [selectedStreet, setSelectedStreet] = useState(null);
  const [selectedTime, setSelectedTime] = useState('now');
  const [map, setMap] = useState(null);
  const [features, setFeatures] = useState([]);
  const [prediction, setPrediction] = useState("");
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const map = tt.map({
      key: 'YOUR_API_KEY',
      container: 'map-container',
      center: [51.517086, 25.276987],
      zoom: 14,
    });

    setMap(map);

    return () => {
      map.remove();
    };
  }, []);

  const handleSelectStreet = (event) => {
    const selectedIndex = event.target.value;
    const selectedStreet = streetsData[selectedIndex];
    const distance = streetDistance[0][parseInt(selectedIndex) + 1]['distance'];
    const newFeatures = [selectedStreet.value, selectedStreet.frc, distance, selectedTime];

    setSelectedStreet(selectedStreet);
    setDistance(distance);
    setFeatures(newFeatures);
  };

  const handlePredict = async () => {
    if (!selectedStreet) {
      alert('Please select a street');
      return;
    }

    const features = {
      streetname: selectedStreet.value,
      frc: selectedStreet.frc,
      distance: distance,
      timeset: selectedTime
    };
    try {
      const response = await fetch('http://127.0.0.1:8000/predict/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(features)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Failed to fetch:', error);
      alert('Failed to fetch data. Check console for more details.');
    }
  };


  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div>
        <label>Select a street:</label>
        <select onChange={handleSelectStreet}>
          <option value="">Select a street</option>
          {streetsData.map((street, index) => (
            <option key={index} value={index}>
              {street.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Select time to predict:</label>
        <select onChange={(e) => {if (e.target.value === 'now') {
      setSelectedTime(new Date().getHours());
    }
    else if (e.target.value === '1 Hours from now') {
      setSelectedTime((new Date().getHours() + 1) % 24);
    }
    else if (e.target.value === '2 Hours from now') {
      setSelectedTime((new Date().getHours() + 2) % 24);
    }
    else if (e.target.value === '3 Hours from now') {
      setSelectedTime((new Date().getHours() + 3) % 24);
    }
    else if (e.target.value === '6 Hours from now') {
      setSelectedTime((new Date().getHours() + 6) % 24);
    }
    else if (e.target.value === '12 Hours from now') {
      setSelectedTime((new Date().getHours() + 12) % 24);
    }
    }}>
          <option value="now">Now</option>
          <option value="1 Hours from now">Next Hour</option>
          <option value="2 Hours from now">Next 2 Hours</option>
          <option value="3 Hours from now">Next 3 Hours</option>
          <option value="6 Hours from now">Next 6 Hours</option>
          <option value="12 Hours from now">Next 12 Hours</option>
        </select>
      </div>
      <div> 
        <button onClick={() => handlePredict()}>Predict</button>
      </div>
      <div id="map-container" style={{ height: '100%', width: '100%', flexGrow: 1 }}></div>

      {selectedStreet &&(
        <div>
          <h3>Selected Street:</h3>
          <p>Name: {selectedStreet.name}</p>
          <p>Road Class: {selectedStreet.frc}</p>
          <p>Distance: {distance} Meters</p>
          <p>Selected Time: {selectedTime}:00</p>
          {prediction &&(
          <p>Prediction: {prediction} Cars</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;