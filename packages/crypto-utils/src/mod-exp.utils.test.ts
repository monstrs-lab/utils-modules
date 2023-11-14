import { describe } from '@jest/globals'
import { expect }   from '@jest/globals'
import { it }       from '@jest/globals'

import { modExp }   from './mod-exp.utils.js'

describe('crypto-utils', () => {
  describe('mod-exp.utils', () => {
    it('check mod exp calculation', () => {
      const a = BigInt(
        '20450123162596248053109173786352081160587808068382027095956530373742711299675568581292610862935904387704346424293245426386289121276563289971535469943918814958139607884774561796897646837901862303829930370565765646319837706314299313902616463227421157638189442927783508921729522190579618115193403430490201417447225131371028211866898461580583858340377294414972842108097787926007103477562275380967134705495290195335573196260583435502662489777493091215013326209446620932671165032031752084091408890052871619670377723104637720847233665496907311997475185208502469884857748989251463782510239768756391170556295086126478255413279'
      )
      const b = BigInt(
        '4985566288060034207149734294903798975501754321606283872907562338041736868878038173812231543240108553626966972452081438142355527477281373912180264551689015898011266369932812169328694457316182261982956680501899183672079959222558786611534770056791405302026522321854656298457601476457148752759177785957795278474205828371446826386541038304104660656682752542241060206104482761804975454856255839762703743516248729864114716795657887572827279890757957508346319042013971238164241570375994996035000223590703701146009443676459028082762989839830555540239701630721627143879275076825460435502944970634697274160624768896675979475425'
      )
      const c = BigInt(
        '23813064486596491643026903030763812656326687047234970204703951093086605143623641702290811066928576217407662304029739903180202186741388339194122731428033163392461508934209366018606125548366054726592597621897308272014948202577715559956282648874858853529546840128809023382553445664497642869293654584820058972769352103544672863124423326448327238794233430182247835525072346857080300576844946333852577057688614290700979666942677163711643994719528044002167040190181767491250722153710492547051038733909766620291079011906347813649336894843319316782175618810042958656414976948048313098163484344821927424378043409879056691914519'
      )

      expect(modExp(a, b, c)).toEqual(
        BigInt(
          '2703293772377681571731875895992243805379813691709473872106346930280616130664426481512570691400938905564983935490027746901559777719090481005492756303894976956082739744124494270922462401543609390830993581906221487821716128182248604087101723660428438988749869715155777996281540844421756388783732601191437955681779165106389007693598520549394531057260973081927389179576759757630934305313615455268257733077266618055091243303627557401770699614270974950706937126011530225304725975804798373908821409204541044367159778492207827015965141458896670628162070825031910980692628109066653029054252908721418055747522989593612692110748'
        )
      )
    })
  })
})