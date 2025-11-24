import tt_um_kbeckmann_flame_v from './tt_um_kbeckmann_flame.v?raw';
import hvsync_gen_v from './hvsync_gen.v?raw';
import voice_v from './voice.v?raw';
import scale_rom_v from './scale_rom.v?raw';
import tria_v from './tria.v?raw';

export const synth = {
  name: 'Synth',
  author: 'kbeckmann',
  topModule: 'tt_um_kbeckmann_flame',
  sources: {
    'tt_um_kbeckmann_flame.v': tt_um_kbeckmann_flame_v,
    'voice.v': voice_v,
    'scale_rom.v': scale_rom_v,
    'hvsync_gen_v': hvsync_gen_v,
    'tria_v': tria_v,
  },
};
