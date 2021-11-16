import { Canvas } from '@react-three/fiber';
import React from 'react';
import Layout from '../components/layout';

export default function loadpdb(props){
    return(
        <Layout>
            <Canvas>
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />

                </mesh>
            </Canvas>

        </Layout>
    )
}