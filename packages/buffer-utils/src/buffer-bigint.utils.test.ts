import { describe }                       from '@jest/globals'
import { expect }                         from '@jest/globals'
import { it }                             from '@jest/globals'

import { fromBigIntToBuffer }             from './buffer-bigint.utils.js'
import { fromBigIntToSignedLittleBuffer } from './buffer-bigint.utils.js'

describe('buffer-utils', () => {
  describe('buffer-bigint.utils', () => {
    it('check convert from bigint to buffer', () => {
      const target = BigInt(
        '19139385899360272978164930193371928269724651080981666481507402623007458766354060294146974974786761796315328528889126201865121826959907179938974286427540882882836148782468313160599455137122408784886847976284448160723169682716100574839308389010075877527530359725502366329963541478358879487732692689924393191387295656294597825567711986225563749317893444229719809956754526211734579537608225955471194141408374243237000397524582183038764099942667174571393381987364269281892437929478693600861012142365239958927437232853951882142826607165532886432884818980790503516043791900292505030486582878424263634833549646433334423142399'
      )

      expect(fromBigIntToBuffer(target, 256, false, false).toString('base64')).toEqual(
        'l5z2yt4ZfMu0cWDf3ricAPoa3eMXdi7yrJx0j+r/BtytSz3+eH5P9tNyo7Ul/DWH69pRTQqCS3u/frd/jXu/cyuLiQCiw1SoLKyUMaY1yHNBASoGr9t+G6wWGSmmLfSNDxJBQ2WH0MhX0fwxMPUPFqFZKDPh605+hXkpnPMJyJr9Zjgb0vro9R4d97mfduePUG9kL/IW8LnLGb6wiMbgJibdcY55/J0LQ4wzrEvkZlosKvTNZC4Wp24JBCLewKqbQiJga0VKbCEqQogg4n4K3rMYRetLM3AdpHGYtyjRdqJ6k3YqCgE4uL3t9JtaC03cKhpMwQhk5UVV8pCJx1c//w=='
      )
    })

    it('check convert from bigint to signed litter buffer', () => {
      expect(fromBigIntToSignedLittleBuffer(BigInt(123456789), 16).toString('base64')).toEqual(
        'Fc1bBwAAAAAAAAAAAAAAAA=='
      )
    })
  })
})
