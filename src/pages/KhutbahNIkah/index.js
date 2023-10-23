import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colors, fonts, windowWidth } from '../../utils'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'

export default function KhutbahNikah() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <ScrollView>
                <View style={{
                    flex: 1,
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <Text style={{
                        textAlign: 'justify',
                        fontFamily: fonts.secondary.normal,
                        fontSize: 20,
                    }}> اَلْحَمْدُ لِلّٰهِ الَّذِيْ خَلَقَ مِنَ الْمَاءِ بَشَرًا فَجَعَلَهُ نَسَبًا وَصِهْرًا وَكَانَ رَبُّكَ قَدِيْرًا وَأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَاشَرِيْكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ، اَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ أَفْضَلُ الْخَلْقِ وَالْوَرَا وَ عَلَى اٰلِهِ وَصَحْبِهِ صَلَاةً وَسَلَامًا كَثِيْرًا  أَمَّا بَعْدُ فَيَاأَيُّهَا الْحَاضِرُوْنَ أُوْصِيْكُمْ وَنَفْسِيْ بِتَقْوَى اللهِ فَقَدْ فَازَ الْمُتَّقِوْنَ قَالَ اللهُ تَعَالٰى فِى كِتَابِهِ الْكَرِيْمِ: يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ حَقَّ تُقٰىتِهٖ وَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ وَاعْلَمُوْا أَنَّ النِّكَاحَ سُنَّةٌ مِنْ سُنَنِ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. وَقَالَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: أَمَا وَاللهِ إِنِّي لَأَخْشَاكُمْ لِلّٰهِ وَأَتْقَاكُمْ لَهُ، لٰكِنِّيْ أَصُوْمُ وَأُفْطِرُ ، وَأُصَلِّيْ وَأَرْقُدُ وَأَتَزَوَّجُ النِّسَاءَ، فَمَنْ رَغِبَ عَنْ سُنَّتِيْ فَلَيْسَ مِنِّيْ وَقَالَ أَيْضًا يَا مَعْشَرَ الشَّبَابِ مَنِ اسْتَطَاعَ مِنْكُمُ الْبَاءَةَ فَلْيَتَزَوَّجْ، فَإِنَّهُ أَغَضُّ لِلْبَصَرِ وَأَحْصَنُ لِلْفَرْجِ، وَمَنْ لَمْ يَسْتَطِعْ فَعَلَيْهِ بِالصَّوْمِ فَإِنَّهُ لَهُ وِجَاءٌ وَقَالَ أَيْضًا خَيْرُ النِّسَاءِ امْرَأَةٌ إِذَا نَظَرْتَ إِلَيْهَا سَرَّتْكَ، وَإِذَا أَمَرْتَهَا أَطَاعَتْكَ، وَإِذَا غِبْتَ عَنْهَا حَفَظَتْكَ فِي نَفْسِهَا وَمَالِكَ وَقَالَ اللهُ تَعَالٰى يٰٓاَيُّهَا النَّاسُ اِنَّا خَلَقْنٰكُمْ مِّنْ ذَكَرٍ وَّاُنْثٰى وَجَعَلْنٰكُمْ شُعُوْبًا وَّقَبَاۤىِٕلَ لِتَعَارَفُوْا ۚ اِنَّ اَكْرَمَكُمْ عِنْدَ اللّٰهِ اَتْقٰىكُمْ وَقَالَ أَيْضًا وَاَنْكِحُوا الْاَيَامٰى مِنْكُمْ وَالصّٰلِحِيْنَ مِنْ عِبَادِكُمْ وَاِمَاۤىِٕكُمْۗ اِنْ يَّكُوْنُوْا فُقَرَاۤءَ يُغْنِهِمُ اللّٰهُ مِنْ فَضْلِهٖۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ بَارَكَ اللهُ لِيْ وَلَكُمْ فِى اْلقُرْاٰنِ الْعَظِيْمِ. وَنَفَعَنِيْ وَإِيَّاكُمْ بِمَا فِيْهِ مِنَ اْلاٰيَاتِ وَالذِّكِرِالْحَكِيْمِ وَتَقَبَّلَ مِنِّيْ وَمِنْكُمَ تِلَاوَتَهُ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيْمِ أَعُوْذُ بِا للّٰهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ. يَا أَيُّهَا النَّاسُ اتَّقُوْا رَبَّكُمُ الَّذِيْ خَلَقَكُمْ مِّنْ نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالاً كَثِيْرًا وَنِسَاءً وَاتَّقُوْا اللهَ الَّذِيْ تَسَاءَلُوْنَ بِهِ وَالْأَرْحَامَ إِنَّ اللهَ كَانَ عَلَيْكُمْ رَقِيْبًا أَقُوْلُ قَوْلِيْ هٰذَا وَاسْتَغْفِرُوْا اللهَ اْلعَظِيْمَ لِيْ وَلَكُمْ وَلِوَالِدَيَّ وَلِمَشَايِخِي وَلِسَائِرِ الْمُسِلِمِيْنَ فَاسْتَغْفِرُوْهُ إِنَّهُ هُوَ اْلغَفُوْرُ الرَّحِيْمُ</Text>

                    <Text style={{
                        marginTop: 10,
                        textAlign: 'justify',
                        fontFamily: fonts.secondary[400],
                        fontSize: 15,
                    }}> Alhamdulilâhilladzî khalaqa minal mâ`i basyaran faja’alahu nasaban wa shihran wa kâna Rabbuka qadîran. Wa asyhadu al lâ ilâha illallâh wahdahu lâ syarîka lah. Wa asyhadu anna Muhammadan ‘abduhu wa rasûlahu. Allâhumma shalli ‘alâ sayyidinâ Muhammadin afdlalul khalqi wal warâ wa ‘alâ âlihi wa shahbihi shalâtan wa salâman katsîran.   Amma ba’du. Fa yâ ayyuhal hâdlirûn, ûshîkum wa nafsî bi taqwallâh faqad fâzal muttaqûn. Qâlallâhu ta’âla fî kitâbihil karîm: Yâ ayyuhalladzîna âmanû ittaqullâha haqqa tuqâtihi wa lâ tamûtunna illâ wa antum muslimûn.   Wa’lamû annannikâha sunnatun min sunani Rasulillâhi shallallâhu ‘alaihi wa sallam. Wa qâla annabiyyu shallallâhu ‘alaihi wa sallam: Amâ wallâhi innî la`akhsyâkum lillâhi wa atqâkum lahu, lakinnî ashûmu wa ufthiru, wa ushalli wa arqadu wa atazawwaju an-nisâ`a, faman raghiba ‘an sunnatî fa laisa minnî.   Wa qâla aidlan, yâ ma’syarasy syabâba man istathâ’a minkum al-bâ`ata fal yatazawwaj, fainnahu aghadldlu lil bashari wa ahshanu lil farji, man lam yastathi’ fa ‘alaihi bish shaumi fainnahu lahu wijâ`un.    Wa qâla aidlan, khairun nisâ`a imra`atun idzâ nadzarta ilaihâ sarratka, wa idzâ amartahâ athâ’atka, wa idzâ ghibta ‘anhâ hafadzatka fî nafsihâ wa mâlika.   Wa qâlallâhu ta’âla, yâ ayyuhannâsu innâ khalaqnâkum min dzakarin wa untsa wa ja’alnâkum syu’ûban wa qabâila li ta’ârafû, inna akramakum ‘indallâhi atqâkum.   Wa qâla aidlan, wa ankihû al-ayyâma minkum wash shâlihîna min ‘ibâdikum wa imâikum in yakûnû fuqarâ`a yughnihimullâha min fadhlihi wallâhu wâsi’un ‘alîm.   Bârakallâhu lî wa lakum fil qur`ânil ‘adzîm. Wa nafa’anî wa iyâkum bimâ fîhi minal âyati wadz dzikril hakîm wa taqabbal minnî wa minkum tilâwatahu innahû huwat tawâbur rahîm.   A’ûdzu billâhi minasy syaithânirrajîm yâ ayyuhannâsu ittaqullâha rabbakumulladzî khalaqakum min nafsin wâhidatin wa khalaqa minhâ zaujahâ wa batstsa minhumâ rijâlan katsîran wa nisâ`a. wattaqullâha alladzî tasâ`alûna bihi wal arhâm. Innallâha kâna ‘alaikum raqîba.   Aqûlu qauli hâdzâ wastaghfirullâha al-‘adzîm lî wa lakum wali wâlidayya wali masyâyikhina wali sâiril muslimîna. Fastaghfirûhu innahû huwal ghafûrurrahîm.  </Text>

                    <Text style={{
                        marginTop: 10,
                        textAlign: 'justify',
                        fontStyle: 'italic',
                        fontFamily: fonts.secondary[400],
                        fontSize: 15,
                    }}> “Segala puji bagi Allah yang telah menciptakan manusia dari setitik air, lalu Dia menjadikannya keturunan dan kekerabatan, dan adalah Tuhanmu Maha Kuasa. Dan aku bersaksi bahwa tiada Tuhan (yang berhak disembah) melainkan Allah Yang Maha Esa, tiada sekutu bagi-Nya. Dan aku bersaksi bahwa Nabi Muhammad adalah hamba dan utusan-Nya. Ya Allah, limpahkanlah rahmat ta’dhim dan kesejahteraan atas junjungan kami Nabi Muhammad saw, seutama-utama penciptaan makhluk dan atas keluarga dan shahabatnya dengan limpahan rahmat ta'dhim serta kesejahteraan yang banyak.   Setelah itu, wahai yang hadir, aku mewasiatkan padamu dan diriku untuk bertakwa kepada Allah, karena sesungguhnya itu adalah kemenangan (yang besar) bagi orang-orang yang bertakwa. Allah swt berfirman dalam kitab-Nya yang mulia:
                        Wahai orang-orang yang beriman, bertakwalah kepada Allah dengan sebenar-benarnya taqwa kepada-Nya, dan sekali-kali janganlah kamu mati kecuali dalam keadaan menyerahkan diri pada Allah (beragama Islam). Ketahuilah bahwa nikah itu adalah sunah dari beberapa sunah Rasulullah saw.
                        Nabi saw bersabda: Adapun aku, demi Allah, adalah orang yang paling takut kepada Allah di antara kalian, dan juga paling bertakwa kepada-Nya. Akan tetapi aku berpuasa dan juga berbuka, aku shalat dan juga tidur serta menikahi wanita. Barang siapa yang benci sunnahku, maka bukanlah dari golonganku. Dan beliau bersabda lagi: Wahai sekalian pemuda, siapa di antara kalian yang telah mempunyai kemampuan (menafkahi keluarga), maka hendaklah ia menikah, karena menikah itu lebih bisa menundukkan pandangan dan lebih bisa menjaga kemaluan, dan barang siapa yang belum mampu, hendaklah ia berpuasa karena hal itu akan lebih bisa meredakan gejolaknya.   Dan beliau bersabda lagi: Istri yang baik adalah wanita yang menggembirakan hatimu ketika dipandang, apabila kamu perintah ia menaatimu, apabila kamu tiada ia mampu menjaga kehormatan dirinya dan hartamu.
                        Dan Allah swt berfirman: Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal mengenal. Sesungguhnya orang yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa di antara kamu.
                        Dan Allah swt berfirman pula: Dan kawinkanlah orang-orang yang sendirian di antara kamu, dan orang-orang yang layak (berkawin) dari hamba-hamba sahayamu yang lelaki dan hamba-hamba sahayamu yang perempuan. Jika mereka miskin Allah akan memampukan mereka dengan kurnia-Nya. Dan Allah Maha luas (pemberian-Nya) lagi Maha Mengetahui.
                        Semoga Allah memberi berkah kepadaku dan kepadamu dalam Al-Qur'an yang agung. Dan memberi manfaat kepadaku dan kepadamu terhadap apa yang ada di dalamnya, dari ayat-ayat dan peringatan yang bijak, dan semoga Allah menerima dariku dan darimu dalam membacanya, karena sesungguhnya Allah Maha Penerima Taubat lagi Maha Penyayang.
                        Aku berlindung kepada Allah dari godaan setan yang terkutuk. Hai sekalian manusia, bertakwalah kepada Tuhan-mu yang telah menciptakan kamu dari diri yang satu, dan daripadanya Allah menciptakan istrinya; dan daripada keduanya Allah memperkembangbiakkan laki-laki dan perempuan yang banyak. Dan bertakwalah kepada Allah yang dengan (mempergunakan) nama-Nya kamu saling meminta satu sama lain, dan (peliharalah) hubungan silaturahmi. Sesungguhnya Allah selalu menjaga dan mengawasi kamu.
                        Aku katakan perkataanku ini, dan mohon ampun pada Allah Yang Maha Agung untukku dan untukmu, untuk kedua orang tau dan guru-guru serta untuk orang Islam lainnya. Maka mohonlah ampun kepada-Nya, karena sesungguhnya Dia Maha Pengampun lagi Maha Penyayang.”
                        {'\n'}
                        Demikian, semoga bermanfaat. Wallahu a’lam bi shawab. (Muhammad Ibnu Sahroji)


                    </Text>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})