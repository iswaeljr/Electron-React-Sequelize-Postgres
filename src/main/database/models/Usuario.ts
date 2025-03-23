import { DataTypes, Model, Optional, Sequelize } from 'sequelize';


interface UserAttributes {
  id_usuario: number;
  id_loja: number;
  id_grupo: number;
  id_departamento: number;
  pto_func_id: number;
  nome: string | null;
  usuario: string | null;
  senha: string | null;
  email: string | null;
  celular: string | null;
  ramal: string | null;
  mensagem: string | null;
  assinatura: string | null;
  imagem: string | null;
  usuario_linx: string | null;
  impressora_cheque: string | null;
  anotacoes: string | null;
  tema: string;
  tema_dsklive: string | null;
  data_cadastro: Date | null;
  data_nascimento: Date | null;
  ultimo_acesso: Date | null;
  data_alteracao_senha: Date | null;
  administrador: boolean;
  menu_classico: boolean;
  exibe_data_nascimento: boolean;
  permite_alterar_foto: boolean;
  bloquear_por_turno: boolean;
  bloquear_multi_computadores: boolean;
  alerta_contrato: boolean;
  modulos_linx: boolean;
  yamcol_biometria: boolean;
  integralizador_yamcol_dsk: boolean;
  integralizador_touch_dsk: boolean;
  etiqueta_yamcol: boolean;
  usb_conf: boolean;
  balanco_linx: boolean;
  acesso_vales_funcionarios: boolean;
  nota_fiscal_monitor: boolean;
  yamcol_restaurante: boolean;
  bloqueado: boolean;
  ativo: boolean;
  qrcode: string | null;
  liberado: boolean;
  liberar_token: boolean;
  uuid_app_yamcol_biometria: string | null;
  libera_local_registro: boolean;
  libera_local_registro_app: boolean;
  realiza_checkin: boolean;
  menu_novo: boolean | null;
  img_perfil: Buffer | null;
  permite_alterar_data_nascimento: boolean;
  nao_gera_advertencia_suspensao: boolean;
  id_empresa: number | null;
  id_usuario_global: number | null;
  token: number | null;
  parametro_tela: boolean;
  uuid_app_yamacorp_next: string | null;
  libera_somente_acesso_estoque_next: boolean;
  permitir_yamcolnext: boolean;
  numero_acessos_global: string | null;
  manter_guias_dentro: boolean;
  configuracao_websocket: string | null;
  bloqueado_estoque: boolean;
  estoque_bloqueado: boolean;
  permite_anexar_foto_pallete: boolean;
  permite_contagem_pallete: boolean;
  permite_alterar_preco_app: boolean;
  }
  
  

interface UserCreationAttributes extends Optional<UserAttributes, 'id_usuario'> {}

export default class Usuario extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
 
  public id_usuario!: number;
  public id_loja!: number;
  public id_grupo!: number;
  public id_departamento!: number;
  public pto_func_id!: number;
  public nome!: string | null;
  public usuario!: string | null;
  public senha!: string | null;
  public email!: string | null;
  public celular!: string | null;
  public ramal!: string | null;
  public mensagem!: string | null;
  public assinatura!: string | null;
  public imagem!: string | null;
  public usuario_linx!: string | null;
  public impressora_cheque!: string | null;
  public anotacoes!: string | null;
  public tema!: string;
  public tema_dsklive!: string | null;
  public data_cadastro!: Date | null;
  public data_nascimento!: Date | null;
  public ultimo_acesso!: Date | null;
  public data_alteracao_senha!: Date | null;
  public administrador!: boolean;
  public menu_classico!: boolean;
  public exibe_data_nascimento!: boolean;
  public permite_alterar_foto!: boolean;
  public bloquear_por_turno!: boolean;
  public bloquear_multi_computadores!: boolean;
  public alerta_contrato!: boolean;
  public modulos_linx!: boolean;
  public yamcol_biometria!: boolean;
  public integralizador_yamcol_dsk!: boolean;
  public integralizador_touch_dsk!: boolean;
  public etiqueta_yamcol!: boolean;
  public usb_conf!: boolean;
  public balanco_linx!: boolean;
  public acesso_vales_funcionarios!: boolean;
  public nota_fiscal_monitor!: boolean;
  public yamcol_restaurante!: boolean;
  public bloqueado!: boolean;
  public ativo!: boolean;
  public qrcode!: string | null;
  public liberado!: boolean;
  public liberar_token!: boolean;
  public uuid_app_yamcol_biometria!: string | null;
  public libera_local_registro!: boolean;
  public libera_local_registro_app!: boolean;
  public realiza_checkin!: boolean;
  public menu_novo!: boolean | null;
  public img_perfil!: Buffer | null;
  public permite_alterar_data_nascimento!: boolean;
  public nao_gera_advertencia_suspensao!: boolean;
  public id_empresa!: number | null;
  public id_usuario_global!: number | null;
  public token!: number | null;
  public parametro_tela!: boolean;
  public uuid_app_yamacorp_next!: string | null;
  public libera_somente_acesso_estoque_next!: boolean;
  public permitir_yamcolnext!: boolean;
  public numero_acessos_global!: string | null;
  public manter_guias_dentro!: boolean;
  public configuracao_websocket!: string | null;
  public bloqueado_estoque!: boolean;
  public estoque_bloqueado!: boolean;
  public permite_anexar_foto_pallete!: boolean;
  public permite_contagem_pallete!: boolean;
  public permite_alterar_preco_app!: boolean;
  public custo!: number;
  public grupo!: string;

  static initModel(sequelize: Sequelize) {
    Usuario.init(
      {
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          id_loja: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          id_grupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          id_departamento: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          pto_func_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
          },
          nome: {
            type: DataTypes.STRING(50),
            allowNull: true,
          },
          usuario: {
            type: DataTypes.STRING(30),
            allowNull: true,
          },
          senha: {
            type: DataTypes.STRING(60),
            allowNull: true,
          },
          email: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          celular: {
            type: DataTypes.STRING(13),
            allowNull: true,
          },
          ramal: {
            type: DataTypes.STRING(3),
            allowNull: true,
          },
          mensagem: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          assinatura: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          imagem: {
            type: DataTypes.STRING(40),
            allowNull: true,
          },
          usuario_linx: {
            type: DataTypes.STRING(40),
            allowNull: true,
          },
          impressora_cheque: {
            type: DataTypes.STRING(40),
            allowNull: true,
          },
          anotacoes: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          tema: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: 'YamaCorp',
          },
          tema_dsklive: {
            type: DataTypes.STRING(30),
            allowNull: true,
          },
          data_cadastro: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          data_nascimento: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          ultimo_acesso: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          data_alteracao_senha: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          administrador: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          menu_classico: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          exibe_data_nascimento: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
          permite_alterar_foto: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
          bloquear_por_turno: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
          bloquear_multi_computadores: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
          alerta_contrato: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          modulos_linx: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          yamcol_biometria: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          integralizador_yamcol_dsk: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          integralizador_touch_dsk: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          etiqueta_yamcol: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          usb_conf: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          balanco_linx: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          acesso_vales_funcionarios: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          nota_fiscal_monitor: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          yamcol_restaurante: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          bloqueado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
          qrcode: {
            type: DataTypes.STRING(50),
            allowNull: true,
          },
          liberado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          liberar_token: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          uuid_app_yamcol_biometria: {
            type: DataTypes.STRING(50),
            allowNull: true,
          },
          libera_local_registro: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          libera_local_registro_app: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          realiza_checkin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          menu_novo: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
          },
          img_perfil: {
            type: DataTypes.BLOB,
            allowNull: true,
          },
          permite_alterar_data_nascimento: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          nao_gera_advertencia_suspensao: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          id_empresa: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          id_usuario_global: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          token: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          parametro_tela: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          uuid_app_yamacorp_next: {
            type: DataTypes.STRING(50),
            allowNull: true,
          },
          libera_somente_acesso_estoque_next: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          permitir_yamcolnext: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          numero_acessos_global: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          manter_guias_dentro: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
          configuracao_websocket: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          bloqueado_estoque: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          estoque_bloqueado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          permite_anexar_foto_pallete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          permite_contagem_pallete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          permite_alterar_preco_app: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
      },
      {
        sequelize,
        tableName: 'usuario',
      }
    );
  }
}
