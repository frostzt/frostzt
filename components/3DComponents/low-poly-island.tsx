import * as THREE from 'three';
import { Box, Spinner } from '@chakra-ui/react';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { loadGLTFModel } from '../../lib/model';

const easeOutCirc = (x: number) => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

const LowPolyIsland = () => {
  const refContainer = useRef(null);
};

export default LowPolyIsland;
